# TODO - Giai đoạn 2: Phát triển ứng dụng chuyên sâu

## Mục tiêu dự án
Xây dựng **Ứng dụng Tin tức** với các tính năng:
- Màn hình danh sách và chi tiết bài báo
- Lấy dữ liệu từ API
- Lưu bài báo yêu thích
- Hiển thị vị trí người dùng
- Dark/Light Mode

---

## Checklist thực hiện

### 1. Thiết lập môi trường ✅
- [x] Cài đặt Homebrew (macOS)
- [x] Cài đặt Node & Watchman
- [x] Cài đặt Xcode + Command Line Tools (macOS)
- [x] Cài đặt Android Studio + SDK + Emulator
- [x] Cài đặt CocoaPods (macOS)

### 2. Navigation (Điều hướng) 📱
- [ ] Cài đặt React Navigation v6
- [ ] Thiết lập Stack Navigator (màn hình danh sách → chi tiết)
- [ ] Thiết lập Bottom Tabs Navigator
- [ ] Tạo drawer navigation (tùy chọn)

### 3. Networking & Data Fetching 🌐
- [ ] Cài đặt Axios (hoặc dùng Fetch API)
- [ ] Tích hợp TanStack Query (React Query)
- [ ] Tạo service gọi API tin tức (ví dụ: NewsAPI.org)
- [ ] Xử lý loading, error states

### 4. Local Storage 💾
- [ ] Cài đặt AsyncStorage hoặc MMKV
- [ ] Tạo hook/useStorage cho việc lưu trữ
- [ ] Lưu trữ bài báo yêu thích (favorites)

### 5. Native Modules (Camera/Location) 📍
- [ ] Cài đặt react-native-maps
- [ ] Lấy vị trí GPS người dùng
- [ ] Hiển thị bản đồ (tùy chọn)

### 6. Global State (Dark Mode) 🌙
- [ ] Cài đặt Zustand
- [ ] Tạo store cho theme (dark/light mode)
- [ ] Áp dụng theme across ứng dụng

### 7. Tối ưu & Debugging ⚡
- [ ] Sử dụng FlatList cho danh sách tin tức
- [ ] Tối ưu performance (keyExtractor, memoized components)
- [ ] Thiết lập Flipper hoặc React Native Debugger

### 8. Hoàn thiện dự án ✨
- [ ] Tạo UI responsive cho cả iOS và Android
- [ ] Test trên cả emulator và thiết bị thật
- [ ] Build APK/IPA để phát hành