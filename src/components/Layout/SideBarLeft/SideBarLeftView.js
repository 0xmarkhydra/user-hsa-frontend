import React from "react";

const SideBarLeftView = () => {
  return (
    <div class="max-w-xs mx-auto p-6">
      <div class="space-y-4">
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="far fa-user text-xl w-8"></i>
          <span>Thông tin cá nhân</span>
        </a>
        <div class="border-b border-gray-300"></div>
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="far fa-window-restore text-xl w-8"></i>
          <span>Khoá học</span>
        </a>
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="far fa-edit text-xl w-8"></i>
          <span>Đề thi</span>
        </a>
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="far fa-comments text-xl w-8"></i>
          <span>Hỏi đáp</span>
        </a>
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="fas fa-book text-xl w-8"></i>
          <span>Sách</span>
        </a>
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="far fa-file-alt text-xl w-8"></i>
          <span>Tài liệu</span>
        </a>
        <a class="flex items-center text-green-700 text-lg" href="#">
          <i class="fas fa-search text-xl w-8"></i>
          <span>Tra số báo danh</span>
        </a>
        <div class="border-b border-gray-300"></div>
        <div class="space-y-4">
          <h2 class="text-green-700 text-xl mb-4">Liên kết</h2>
          <a class="flex items-center text-green-700 text-lg" href="#">
            <a
              href="#"
              class="bg-blue-600 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1"
            >
              <i class="fab fa-facebook-f text-white"></i>
            </a>
            <span>Page Hsa Education</span>
          </a>
          <a class="flex items-center text-green-700 text-lg" href="#">
            <a
              href="#"
              class="bg-red-600 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1"
            >
              <i class="fab fa-youtube text-white"></i>
            </a>
            <span>Youtube ôn thi đánh giá năng lực đánh giá tư duy</span>
          </a>
          <a class="flex items-center text-green-700 text-lg" href="#">
            <a
              href="#"
              class="bg-black p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1"
            >
              <i class="fab fa-tiktok text-white"></i>
            </a>
            <span>Tiktok hsa official</span>
          </a>
          <a class="flex items-center text-green-700 text-lg" href="#">
            <a
              href="#"
              class="bg-blue-600 p-2 w-8 h-8 rounded-full flex items-center justify-center mr-1"
            >
              <i class="fab fa-facebook-f text-white"></i>
            </a>
            <span>Thầy Văn Hoa Hsa</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarLeftView;
