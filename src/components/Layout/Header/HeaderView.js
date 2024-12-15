import useRedirect from "@/components/Home/useRedirect";
import React from "react";
import useUserInfo from "@/hooks/useUserInfo";
import SearchView from "@/components/Search/SearchView";
import { useSearch } from "@/components/Search/useSearch";

const HeaderView = () => {
  const { userInfo } = useUserInfo();
  const { redirect } = useRedirect();
  const {
    wrapperRef,
    loading,
    listSearch,
    hasSearched,
    inputValue,
    type,
    handleInputChange,
    setShowSearch,
    showSearch,
    focusInput,
  } = useSearch();

  return (
    <div class="w-[100%] px-4 py-3 flex items-center justify-between shadow-sm relative">
      <div
        class="flex items-center cursor-pointer"
        onClick={() => {
          redirect("/");
        }}
      >
        <img
          alt="HSA Education logo - A hexagonal shape in green with HSA letters inside"
          class="h-10"
          height="40"
          width="40"
          src="/images/logo.png"
        />
        <span class="ml-2 text-[#FF6B00] text-xl font-bold whitespace-nowrap hidden sm:block">
          HSA Education
        </span>
      </div>

      <div className="flex-1 justify-end mx-4 sm:flex hidden">
        <SearchView
          wrapperRef={wrapperRef}
          loading={loading}
          listSearch={listSearch}
          hasSearched={hasSearched}
          inputValue={inputValue}
          type={type}
          handleInputChange={handleInputChange}
        />
      </div>

      <>
        <div className="flex-1 justify-end mx-4 sm:hidden flex">
          <button
            className="text-gray-600 p-2"
            onClick={() => {
              setShowSearch(true), focusInput();
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        {showSearch && (
          <div className="w-full absolute left-0 scale-95">
            <SearchView
              wrapperRef={wrapperRef}
              loading={loading}
              listSearch={listSearch}
              hasSearched={hasSearched}
              inputValue={inputValue}
              type={type}
              handleInputChange={handleInputChange}
              setShowSearch={setShowSearch}
            />
          </div>
        )}
      </>

      {Object.keys(userInfo).length > 0 ? (
        <div className="flex items-center hidden sm:block">
          <img
            src={userInfo?.avatar}
            alt="User Avatar"
            className="h-8 w-8 rounded-full mr-2"
            // Nếu lỗi src thì hiển thị ảnh mặc định
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/logo.png";
            }}
          />
          <span>{userInfo?.full_name || userInfo?.username}</span>
        </div>
      ) : (
        <button
          className="bg-[#75B53C] hidden sm:block text-white px-4 py-2 rounded-md hover:bg-[#68a235]"
          onClick={() => {
            redirect("/authentication/signin");
          }}
        >
          <i className="fas fa-sign-in-alt mr-2"></i>
          Đăng nhập
        </button>
      )}
    </div>
  );
};

export default HeaderView;
