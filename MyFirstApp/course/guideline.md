# HƯỚNG DẪN BÀI TẬP: "Profile Cá Nhân" - Giai Đoạn 1

## 📋 Phân Tích Yêu Cầu

Bài tập yêu cầu tạo một trang **Profile cá nhân** với các thành phần:
- Ảnh đại diện (Image)
- Tên và mô tả (Text)
- Danh sách sở thích (FlatList)
- Nút Like với bộ đếm (TouchableOpacity + useState)

**Các kỹ năng được kiểm tra:**
| Kỹ năng | Thành phần | Mục đích |
|---------|-------------|----------|
| Core Component | `View`, `Text`, `Image`, `ScrollView` | Xây dựng giao diện cơ bản |
| Layout | Flexbox (`flexDirection: column`) | Dàn trang theo chiều dọc |
| Styling | `StyleSheet.create` | Tối ưu hiệu năng, viết style dạng Object |
| State | `useState` | Quản lý số Like khi người dùng nhấn |
| List | `FlatList` | Hiển thị danh sách sở thích hiệu quả |
| Events | `onPress` | Xử lý sự kiện nhấn nút |

---

## 🔍 Mô Tả Chi Tiết Các Thành Phần

### 1. View & ScrollView

- **`View`**: Thay thế cho `<div>` trong Web. Dùng để bao bọc (wrap) và tổ chức layout.
- **`ScrollView`**: Cho phép nội dung **cuộn** lên xuống. **Bắt buộc** phải có khi nội dung có thể vượt quá chiều cao màn hình.

> **Note:** Trong React Native, `flexDirection` mặc định là `column` (dọc), khác với Web là `row` (ngang). Luôn ghi nhớ điều này khi chuyển từ Web sang App.

### ⚠️ Lưu Ý: Xử Lý Vùng Không An Toàn (Unsafe Areas / Tai Th�)

Trong React Native, khoảng không gian "tai thỏ" (notch), "viên thuốc" (dynamic island) hoặc phần đục lỗ camera được gọi chung là các **vùng không an toàn** (**unsafe areas**). Nếu không xử lý, giao diện ứng dụng của bạn có thể bị che mất chữ, tràn nút lên thanh trạng thái (status bar) hoặc lẹm vào góc bo tròn của màn hình.

Dưới đây là các cách phổ biến và hiệu quả nhất để né tránh "tai thỏ":

#### Cách 1: Sử dụng `SafeAreaView` từ `react-native-safe-area-context` (Khuyên dùng)

Đây là giải pháp **chuẩn chỉnh và mạnh mẽ nhất** hiện nay. Thư viện `react-native-safe-area-context` giải quyết được cho cả iOS và Android.

**Cài đặt:**

```bash
npm install react-native-safe-area-context
```

**Cách A: Bọc bằng `SafeAreaView`** — Tự động thêm padding vào các cạnh để đẩy nội dung vào vùng an toàn.

```jsx
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text>Nội dung này chắc chắn không bị che bởi tai thỏ!</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
```

**Cách B: Sử dụng Hook `useSafeAreaInsets`** — Linh hoạt hơn, lấy chính xác kích thước các cạnh để tùy biến.

```jsx
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MyScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{
      flex: 1,
      paddingTop: insets.top,     // Né tai thỏ phía trên
      paddingBottom: insets.bottom, // Né thanh điều hướng phía dưới
    }}>
      <Text>Giao diện linh hoạt tùy biến theo từng cạnh.</Text>
    </View>
  );
}
```

#### Cách 2: Tùy chỉnh bằng `StatusBar` (Giải pháp nhanh cho Android)

Với Android, có thể dùng `StatusBar.currentHeight` để cộng thủ công vào `paddingTop`.

```jsx
import { Platform, StatusBar } from 'react-native';

<View style={{
  flex: 1,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
}}>
  <Text>Nội dung né tai thỏ trên Android</Text>
</View>
```

> **Nhược điểm:** Cách này không tối ưu cho iOS và các Android đời mới có tai thỏ sâu.

#### Cách 3: Nếu sử dụng React Navigation

Các thành phần như `Header` và `BottomTabBar` của React Navigation **đã tích hợp sẵn** `react-native-safe-area-context`, nên tự động xử lý tai thỏ. Tuy nhiên, nếu bạn tự làm **Custom Header**, bắt buộc phải dùng Hook `useSafeAreaInsets` để tự cộng khoảng cách.

#### Nên chọn cách nào?

- **Luôn cài đặt** `react-native-safe-area-context` cho mọi dự án.
- Dùng `<SafeAreaView>` cho màn hình đơn giản (danh sách, nhập liệu).
- Dùng `useSafeAreaInsets()` cho màn hình phức tạp (ảnh cover tràn viền, Header tự chế).

---

### 2. Image

Dùng để hiển thị ảnh đại diện. Có thể load từ URL hoặc từ local.

```jsx
<Image
  source={{ uri: 'https://example.com/avatar.jpg' }}
  style={styles.avatar}
/>
```

> **Note:** Để tạo hình tròn, sử dụng `borderRadius` với giá trị bằng một nửa kích thước width/height.

### 3. Text

Bắt buộc phải bọc text trong thẻ `<Text>`, không dùng trực tiếp chuỗi trong `<View>`.

```jsx
<Text style={styles.name}>Nguyễn Văn A</Text>
```

> **Note:** Trong React Native, **không dùng CSS shorthand** như `margin: '10px 20px'`. Phải ghi đầy đủ: `marginTop`, `marginBottom`, `marginLeft`, `marginRight`. Ngoài ra dùng camelCase: `backgroundColor` thay vì `background-color`.

### 4. FlatList

Hiển thị danh sách **hiệu quả** — chỉ render những item đang hiển thị trên màn hình (virtualization). Ưu tiên dùng `FlatList` thay vì `.map()` khi danh sách có nhiều phần tử.

```jsx
<FlatList
  data={hobbies}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Text style={styles.hobbyItem}>{item}</Text>
  )}
/>
```

> **Note:** `keyExtractor` bắt buộc phải có để React Native biết phân biệt các item. Dùng `index.toString()` nếu không có id riêng.

### 5. TouchableOpacity & useState

- **`TouchableOpacity`**: Nút bấm có hiệu ứng opacity (mờ đi khi nhấn). Bọc component bên trong để tạo nút.
- **`useState`**: Hook quản lý state. Khi state thay đổi, component sẽ **re-render** tự động.

```jsx
const [likes, setLikes] = useState(0);

<TouchableOpacity onPress={() => setLikes(likes + 1)}>
  <Text style={styles.buttonText}>❤️ Like</Text>
</TouchableOpacity>
```

> **Note:** Luôn dùng hàm setter (`setLikes`) để cập nhật state, **không** sửa trực tiếp biến state (`likes = likes + 1` sẽ không hoạt động).

### 6. StyleSheet

Sử dụng `StyleSheet.create()` để **tối ưu hiệu năng** — các style object chỉ được tạo một lần và không bị tạo lại mỗi khi component re-render.

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
});
```

> **Note:** `flex: 1` giúp component chiếm hết không gian khả dụng. Ưu tiên dùng flex thay vì pixel cố định để tương thích nhiều kích cỡ màn hình.

---

## 📝 Code Mẫu Hoàn Chỉnh

```jsx
// ProfileScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  // State để quản lý số Like
  const [likes, setLikes] = useState(0);

  // Danh sách sở thích
  const hobbies = [
    'Đọc sách',
    'Lập trình',
    'Du lịch',
    'Nấu ăn',
    'Chơi guitar',
    'Xem phim',
  ];

  // Nội dung phía trên danh sách (Header)
  const HeaderContent = (
    <View style={styles.headerContent}>
      {/* Phần ảnh đại diện */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/200' }}
          style={styles.avatar}
        />
      </View>

      {/* Phần tên và mô tả */}
      <Text style={styles.name}>Nguyễn Văn A</Text>
      <Text style={styles.bio}>
        Mình là một lập trình viên đam mê công nghệ, thích học hỏi điều mới
        mỗi ngày và mong muốn xây dựng những sản phẩm có ích cho cộng đồng.
      </Text>

      {/* Phần tiêu đề sở thích */}
      <Text style={styles.sectionTitle}>Sở Thích</Text>
    </View>
  );

  // Nội dung phía dưới danh sách (Footer)
  const FooterContent = (
    <View style={styles.footerContent}>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => setLikes(likes + 1)}
      >
        <Text style={styles.likeButtonText}>❤️ Like ({likes})</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    // SafeAreaView thay cho ScrollView — xử lý tai thỏ & chứa FlatList
    <SafeAreaView style={styles.container}>
      <FlatList
        data={hobbies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.hobbyItemContainer}>
            <Text style={styles.hobbyText}>📌 {item}</Text>
          </View>
        )}
        ListHeaderComponent={HeaderContent}
        ListFooterComponent={FooterContent}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

// =============================================
// STYLE
// =============================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  flatListContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Nửa của width/height để tạo hình tròn
    borderWidth: 3,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    alignSelf: 'flex-start', // Căn trái cho tiêu đề
    marginBottom: 8,
  },
  hobbyItemContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    // Shadow cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Shadow cho Android
    elevation: 2,
  },
  hobbyText: {
    fontSize: 15,
    color: '#333',
  },
  footerContent: {
    marginTop: 8,
  },
  likeButton: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

### Tại sao thay `ScrollView` bằng `SafeAreaView`?

| Vấn đề | Trước (ScrollView) | Sau (SafeAreaView) |
|--------|-------------------|---------------------|
| Tai thỏ | Content bị che bởi notch/dynamic island | `SafeAreaView` tự động thêm padding vùng an toàn |
| FlatList lồng ScrollView | ❌ Không nên lồng — gây lỗi cuộn, performance kém | ✅ `FlatList` là thành phần cuộn duy nhất, `SafeAreaView` chỉ đóng vai trò container |
| Quản lý scroll | Phải dùng `scrollEnabled={false}` trên FlatList | FlatList tự quản lý cuộn, không cần tắt |

> **Quy tắc chung:** Trong React Native, **không nên lồng** các thành phần có thể cuộn (`ScrollView`, `FlatList`, `SectionList`) vào nhau. Nếu cần cả nội dung tĩnh lẫn danh sách cuộn, hãy đặt nội dung tĩnh vào `ListHeaderComponent` / `ListFooterComponent` của `FlatList`.

---

## 📊 Tóm Tắt Các Bước Thực Hiện

### Bước 1: Khởi tạo component cơ bản
- Import `useState` từ React
- Import các Core Components từ `react-native`
- Tạo component chính `ProfileScreen`

### Bước 2: Xây dựng layout tổng thể
- Dùng `SafeAreaView` làm thành phần ngoài cùng để xử lý tai thỏ và chứa FlatList
- Dùng `View` làm container cho từng phần nội dung
- Áp dụng `flexDirection: column` (mặc định) — các phần tử xếp theo chiều dọc

### Bước 3: Thêm ảnh đại diện
- Dùng `Image` với `source={{ uri: '...' }}` để load ảnh từ URL
- Style `borderRadius` để tạo hình tròn
- Căn giữa bằng `alignItems: 'center'`

### Bước 4: Thêm tên và mô tả
- Dùng `Text` cho tên (font to, bold)
- Dùng `Text` cho bio (font nhỏ hơn, màu nhạt)
- Style `textAlign: 'center'` để căn giữa

### Bước 5: Danh sách sở thích với FlatList
- Khai báo mảng dữ liệu `hobbies`
- Dùng `FlatList` với `data`, `keyExtractor`, `renderItem`
- Đặt nội dung tĩnh (avatar, tên, bio) vào `ListHeaderComponent`
- Đặt nút Like vào `ListFooterComponent`
- Mỗi item được bọc trong `View` có shadow để đẹp hơn

### Bước 6: Nút Like với State
- Khai báo `const [likes, setLikes] = useState(0)`
- Dùng `TouchableOpacity` bọc `Text` nút
- Xử lý `onPress={() => setLikes(likes + 1)}`
- Hiển thị số likes trong text nút: `Like ({likes})`

### Bước 7: Styling hoàn thiện
- Tất cả style được đặt trong `StyleSheet.create({...})` ở cuối file
- Dùng `flex`, %, thay vì pixel cố định
- Thêm shadow/elevation cho các thẻ
- Chọn màu sắc hài hòa

---

## ⚡ Lưu Ý Quan Trọng

1. **flexDirection mặc định là `column`** — khác hoàn toàn so với Web (mặc định `row`)
2. **Không dùng CSS shorthand** — phải ghi riêng `marginTop`, `paddingLeft`, v.v.
3. **CamelCase** — `backgroundColor`, `fontSize`, `borderRadius` (không dùng kebab-case)
4. **StyleSheet.create** — tối ưu hiệu năng, tránh tạo lại object mỗi lần re-render
5. **FlatList luôn cần `keyExtractor`** — để React Native phân biệt các item
6. **Ưu tiên `flex` hơn pixel** — tương thích tốt trên nhiều màn hình
7. **`onPress` thay vì `onClick`** — sự kiện chạm trong mobile

---

## ✅ Thành quả mong đợi

Sau khi hoàn thành, bạn sẽ có một trang Profile:
- Hiển thị đẹp trên điện thoại
- Có ảnh avatar tròn
- Tên và mô tả cá nhân
- Danh sách sở thích dạng card
- Nút Like hoạt động (tăng số đếm khi nhấn)
- Layout responsive nhờ sử dụng flex

> **Mục tiêu:** Hiển thị giao diện đẹp và đúng layout trên điện thoại là đã thành công 50% chặng đường! 🎯