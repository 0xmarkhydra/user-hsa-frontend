import React from "react";

const HeaderView = () => {
  return (
    <div class="container mx-auto px-4 py-3 flex items-center justify-between shadow-sm">
      <div class="flex items-center">
        <img
          alt="HSA Education logo - A hexagonal shape in green with HSA letters inside"
          class="h-10"
          height="40"
          width="40"
          src="./images/logo.png"
        />
        <span class="ml-2 text-[#FF6B00] text-xl font-bold">HSA Education</span>
      </div>
      <button class="bg-[#75B53C] text-white px-4 py-2 rounded-md hover:bg-[#68a235]">
        <i class="fas fa-sign-in-alt mr-2"></i>
        Đăng nhập
      </button>
    </div>
  );
};

export default HeaderView;
