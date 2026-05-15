# BÀI TẬP THỰC HÀNH GIAI ĐOẠN 1: "Profile cá nhân"

## Mục tiêu
Tạo một trang Profile cá nhân đơn giản trên React Native, tập trung vào giao diện và layout.

## Checklist

- [ ] **Bước 1: Thiết kế layout tổng thể**
  - Sử dụng `View` làm container chính
  - Sử dụng `ScrollView` để nội dung có thể cuộn
  - Áp dụng Flexbox layout (flexDirection: column)

- [ ] **Bước 2: Hiển thị ảnh đại diện**
  - Sử dụng `Image` để hiển thị avatar
  - Style hình tròn (borderRadius)

- [ ] **Bước 3: Hiển thị tên và mô tả**
  - Sử dụng `Text` cho tên người dùng
  - Sử dụng `Text` cho mô tả bản thân
  - Style font size, font weight, màu sắc

- [ ] **Bước 4: Hiển thị danh sách sở thích**
  - Sử dụng `FlatList` để render danh sách
  - Mỗi item là một sở thích (text)

- [ ] **Bước 5: Nút "Like" với State**
  - Sử dụng `TouchableOpacity` cho nút bấm
  - Sử dụng `useState` để quản lý số lượng Like
  - Hiển thị số Like trên màn hình

- [ ] **Bước 6: Styling & hoàn thiện**
  - Sử dụng `StyleSheet.create` để tối ưu
  - Căn giữa nội dung, thêm khoảng cách, màu nền
  - Kiểm tra layout trên điện thoại

## Note
- Chỉ tập trung vào giao diện (UI), không cần backend
- Ưu dùng flex thay vì kích thước cố định (pixel)
- Mặc định flexDirection là `column` trong React Native