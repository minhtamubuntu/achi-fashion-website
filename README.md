# ACHI FASHION – Astro starter

Bộ mã nguồn Astro đầu tiên được chuyển từ website V2.

## Chạy thử trên máy
1. Cài Node.js bản LTS.
2. Mở terminal tại thư mục dự án.
3. Chạy `npm install`.
4. Chạy `npm run dev` và mở địa chỉ local được hiển thị.

## Build
- `npm run build`
- Thư mục xuất bản: `dist/`
- Netlify build command: `npm run build`
- Netlify publish directory: `dist`

## Cấu trúc nội dung
- `src/content/blog/`: bài Blog/Editorial dạng Markdown.
- `src/content/reviews/`: bài Review/Affiliate dạng Markdown.
- `src/pages/blog/`: trang danh sách và template bài Blog.
- `src/pages/review/`: trang danh sách và template bài Review.
- `src/pages/contact.astro`: Liên hệ & chăm sóc khách hàng.
- `src/pages/collections.astro`: điểm vào Bộ sưu tập (phát triển bán hàng giai đoạn 2).
- `public/assets/`: toàn bộ ảnh và logo từ ZIP V2.

## Quy tắc an toàn triển khai
Chưa gắn domain `achifashion.vn` vào site thử nghiệm. Hãy kết nối repository này với một Netlify site mới để kiểm tra trước. Không thay đổi site V2 đang hoạt động cho đến khi được duyệt.
