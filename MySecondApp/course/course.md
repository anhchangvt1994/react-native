### LỘ TRÌNH GIAI ĐOẠN 2

### 1. Thiết lập môi trường (Environment Setup)

Để phát triển React Native một cách chuyên nghiệp, bạn nên thiết lập **React Native CLI** thay vì chỉ dùng Expo Go, để có thể can thiệp sâu vào các thư viện native.

#### Đối với macOS (Phát triển cho cả iOS và Android):

1. **Cài đặt Homebrew:** Dùng để quản lý các gói phần mềm.
2. **Node & Watchman:** `brew install node`
`brew install watchman`
3. **iOS (Xcode):** Cài đặt Xcode từ App Store, cài đặt thêm "Command Line Tools" và các thiết bị mô phỏng (Simulators).
4. **Android (Android Studio):** Cài đặt Android SDK, Android SDK Platform và Virtual Device (Emulator).
5. **CocoaPods:** Cần thiết để quản lý các thư viện native trên iOS (`sudo gem install cocoapods`).

#### Đối với Windows (Chỉ phát triển cho Android):

1. **Node & JDK:** Khuyến khích dùng Node LTS và OpenJDK 17.
2. **Android Studio:** Thiết lập biến môi trường `ANDROID_HOME` và cài đặt Android SDK phù hợp.

---

### 2. Giai đoạn 2: Phát triển ứng dụng chuyên sâu

Giai đoạn này tập trung vào việc biến các bản giao diện tĩnh thành một ứng dụng có thể hoạt động thực tế với dữ liệu và tính năng người dùng.

#### Mục 1: Điều hướng ứng dụng (Navigation)

Đây là xương sống của mọi ứng dụng di động. Bạn cần làm chủ thư viện **React Navigation**.

* **Stack Navigation:** Chuyển đổi giữa các màn hình theo dạng chồng lớp (ví dụ: từ danh sách vào chi tiết).
* **Tab Navigation:** Menu điều hướng ở dưới cùng (Bottom Tabs) hoặc trên cùng ứng dụng.
* **Drawer Navigation:** Menu dạng ngăn kéo từ cạnh màn hình.
* **Nested Navigation:** Cách kết hợp nhiều loại điều hướng với nhau.

#### Mục 2: Xử lý dữ liệu và Networking

* **Gọi API:** Sử dụng `Axios` hoặc `Fetch API` để lấy dữ liệu từ server.
* **Quản lý trạng thái bất đồng bộ:** Sử dụng **TanStack Query (React Query)** để quản lý việc caching, loading và error handling khi gọi API.
* **Xử lý Form:** Sử dụng `React Hook Form` kết hợp với `Yup` hoặc `Zod` để validate dữ liệu người dùng nhập vào.

#### Mục 3: Lưu trữ dữ liệu cục bộ (Local Storage)

Học cách lưu trữ các thông tin nhỏ như token đăng nhập, cài đặt ứng dụng.

* **AsyncStorage:** Thư viện cơ bản để lưu trữ dạng key-value.
* **MMKV:** Một lựa chọn thay thế tốc độ cao hơn cho ứng dụng yêu cầu hiệu năng lớn.

#### Mục 4: Tương tác với phần cứng (Native Modules)

Tận dụng các tính năng đặc thù của điện thoại:

* **Camera & Photos:** Chụp ảnh, chọn ảnh từ thư viện (sử dụng `react-native-image-picker` hoặc `expo-camera`).
* **Location:** Lấy tọa độ GPS và hiển thị bản đồ với `react-native-maps`.
* **Push Notifications:** Thiết lập thông báo đẩy với Firebase Cloud Messaging (FCM).

#### Mục 5: Quản lý Global State (Nâng cao)

Khi ứng dụng lớn dần, việc truyền dữ liệu qua lại giữa các màn hình sẽ khó khăn.

* **Zustand:** Thư viện cực kỳ nhẹ và dễ học cho React Native.
* **Redux Toolkit:** Nếu bạn làm việc trong các dự án lớn, quy mô doanh nghiệp.

#### Mục 6: Hiệu năng và Debugging

* **Flipper / React Native Debugger:** Các công cụ để soi log, kiểm tra network và cấu trúc component.
* **Tối ưu hóa List:** Sử dụng `FlatList` và `SectionList` một cách hiệu quả để tránh tình trạng giật lag khi danh sách có hàng nghìn phần tử.

### Dự án nhỏ gợi ý cho giai đoạn 2:

Hãy xây dựng một **Ứng dụng Tin tức hoặc Thời tiết**:

1. Có màn hình danh sách và màn hình chi tiết (Navigation).
2. Lấy dữ liệu từ một API công khai (Networking).
3. Cho phép người dùng lưu các bài báo yêu thích (Local Storage).
4. Hiển thị vị trí hiện tại của người dùng (Location).
5. Có chế độ Dark Mode/Light Mode (Global State).

Giai đoạn này sẽ giúp bạn hiểu rõ cách thức một ứng dụng di động vận hành thực tế đằng sau lớp giao diện. Nếu bạn đã có nền tảng tốt về React web, việc tiếp cận các khái niệm này sẽ rất nhanh chóng.