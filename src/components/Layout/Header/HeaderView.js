import useRedirect from "@/components/Home/useRedirect";
import React from "react";

const HeaderView = () => {
  const {redirect} = useRedirect();
  return (
    <div class="w-screen px-4 py-3 flex items-center justify-between shadow-sm">
      <div class="flex items-center cursor-pointer" onClick={() => {redirect("/")}}>
        <img
          alt="HSA Education logo - A hexagonal shape in green with HSA letters inside"
          class="h-10"
          height="40"
          width="40"
          src="/images/logo.png"
        />
        <span class="ml-2 text-[#FF6B00] text-xl font-bold whitespace-nowrap">HSA Education</span>
      </div>
      <button class="bg-[#75B53C] hidden xs:block text-white px-4 py-2 rounded-md hover:bg-[#68a235]" onClick={() => {redirect("/authentication/signin")}}>
        <i class="fas fa-sign-in-alt mr-2"></i>
        Đăng nhập
      </button>
    </div>
  );
};

export default HeaderView;
