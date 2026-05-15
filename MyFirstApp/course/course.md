### LỘ TRÌNH GIAI ĐOẠN 1 - CĂN BẢN & GIAO DIỆN

Mục tiêu của giai đoạn này là giúp bạn chuyển dịch tư duy từ làm Web sang App.

#### Bước 1: Làm quen với Core Components

Trong App không có `<div>`, `<span>` hay `<img>`. Bạn cần làm quen với:

* `<View>`: Thay thế cho `<div>`, dùng để bao bọc và dàn trang.
* `<Text>`: Dùng để hiển thị chữ (bắt buộc phải có thẻ này mới hiện được chữ).
* `<Image>`: Hiển thị hình ảnh.
* `<ScrollView>`: Cho phép nội dung cuộn lên xuống.

#### Bước 2: Layout với Flexbox (Quan trọng nhất)

React Native sử dụng Flexbox để dàn trang, nhưng có 2 điểm khác biệt lớn so với Web:

* **flexDirection:** Mặc định là `column` (dọc) thay vì `row` (ngang).
* **Kích thước:** Ưu tiên dùng tỉ lệ `flex: 1` thay vì đơn vị pixel cố định để tương thích nhiều kích cỡ màn hình.

#### Bước 3: Styling (StyleSheet)

* Cách viết gần giống CSS nhưng dưới dạng Object (CamelCase). Ví dụ: `backgroundColor` thay vì `background-color`.
* Sử dụng `StyleSheet.create` để tối ưu hiệu năng.

#### Bước 4: State & Props (Cơ bản)

* **Props:** Truyền dữ liệu từ component cha xuống con.
* **State (`useState`):** Quản lý dữ liệu thay đổi trên màn hình (ví dụ: nhấn nút thì số tăng lên).
* **Events:** Thay vì `onClick`, trong React Native chúng ta dùng `onPress`.

#### Bước 5: List Rendering

* **FlatList:** Cách hiển thị danh sách dài một cách mượt mà (chỉ render những gì hiện lên màn hình, giúp tiết kiệm bộ nhớ hơn là dùng `.map` thông thường).

---

### BÀI TẬP THỰC HÀNH GIAI ĐOẠN 1

**Tạo một trang "Profile cá nhân" đơn giản:**

1. Có ảnh đại diện (`Image`).
2. Tên và mô tả bản thân (`Text`).
3. Một danh sách các sở thích (`FlatList`).
4. Một nút "Like" (`TouchableOpacity`) khi bấm vào sẽ tăng số lượng Like (`useState`).

Giai đoạn này bạn chỉ cần tập trung vào việc **hiển thị giao diện đẹp và đúng layout** trên điện thoại là đã thành công 50% chặng đường.