# GIAI ĐOẠN 2: Hướng dẫn chi tiết React Native

## 1. Navigation (Điều hướng)

### 1.1 Cài đặt React Navigation

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

### 1.2 Stack Navigator cơ bản

```tsx
// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### 1.3 Bottom Tabs Navigator

```tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from './src/screens/NewsScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
```

### 1.4 Nested Navigation (Kết hợp)

```tsx
// Tab Navigator chứa Stack Navigator
function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsList" component={NewsListScreen} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewsTab" component={NewsStack} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
```

---

## 2. Networking & Data Fetching

### 2.1 Cấu hình Axios

```bash
npm install axios
npm install @tanstack/react-query
```

```typescript
// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 10000,
});

export const fetchNews = async () => {
  const response = await api.get('top-headlines', {
    params: {
      country: 'us',
      apiKey: 'YOUR_API_KEY',
    },
  });
  return response.data.articles;
};
```

### 2.2 TanStack Query (React Query)

```tsx
// src/screens/NewsScreen.tsx
import { useQuery } from '@tanstack/react-query';

function NewsScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading news</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => <NewsItem article={item} />}
    />
  );
}
```

---

## 3. Local Storage

### 3.1 AsyncStorage

```bash
npm install @react-native-async-storage/async-storage
```

```typescript
// src/hooks/useStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavorites = async (favorites: any[]) => {
  try {
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Save error:', error);
  }
};

export const loadFavorites = async () => {
  try {
    const data = await AsyncStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Load error:', error);
    return [];
  }
};
```

---

## 4. Native Modules

### 4.1 Location & Maps

```bash
npm install react-native-maps
npx pod-install ios
```

```tsx
// src/screens/LocationScreen.tsx
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function LocationScreen() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => setPosition(pos.coords),
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);

  return position ? (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude: position.latitude, longitude: position.longitude }}
      />
    </MapView>
  ) : <ActivityIndicator />;
}
```

---

## 5. Global State (Zustand)

```bash
npm install zustand
```

```typescript
// src/store/themeStore.ts
import { create } from 'zustand';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
```

```tsx
// Usage in component
import { useThemeStore } from '../store/themeStore';

function SettingsScreen() {
  const { isDark, toggleTheme } = useThemeStore();
  
  return (
    <Switch
      value={isDark}
      onValueChange={toggleTheme}
    />
  );
}
```

---

## 6. Performance Optimization

### 6.1 FlatList Optimization

```tsx
const NewsItem = React.memo(({ article }) => (
  <View style={styles.item}>
    <Text>{article.title}</Text>
  </View>
));

function NewsList({ data }) {
  const renderItem = useCallback(({ item }) => (
    <NewsItem article={item} />
  ), []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.url}
      renderItem={renderItem}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={21}
    />
  );
}
```

---

## 7. Cấu trúc thư mục đề xuất

```
src/
├── components/     # Các component dùng chung
├── screens/        # Các màn hình
├── navigation/     # Cấu hình navigation
├── services/       # API calls
├── store/          # Zustand stores
├── hooks/          # Custom hooks
└── utils/          # Helper functions
```

---

## 8. Lưu ý quan trọng

1. **Navigation**: Luôn đặt tên route rõ ràng, dùng TypeScript để type-safe params
2. **API**: Lưu API key trong `.env` file, không hardcode
3. **Storage**: Kiểm tra permission trước khi truy cập
4. **Maps**: Cần API key từ Google Cloud Console
5. **Theme**: Dùng Context + Zustand để quản lý theme toàn app