import React, { useState } from "react";
import useScrollDirection from "./useScroll";
import useMenuTab from "./useMenuTab";

const MenuTabView = () => {
  const scrollDirection = useScrollDirection();
  const { expanded, toggleMenu } = useMenuTab();

  return (
    <div
      className={`block xs:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md transition-transform duration-300 ${
        scrollDirection === "down" ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-around py-2 relative">
        {/* Home */}
        <a className="flex flex-col items-center text-green-700" href="#">
          <i className="fas fa-home text-xl"></i>
          <span className="text-sm">Home</span>
        </a>
        {/* Sách */}
        <a className="flex flex-col items-center text-green-700" href="#">
          <i className="fas fa-book text-xl"></i>
          <span className="text-sm">Sách</span>
        </a>
        {/* Khóa học */}
        <a className="flex flex-col items-center text-green-700" href="#">
          <i className="far fa-window-restore text-xl"></i>
          <span className="text-sm">Khóa học</span>
        </a>
        {/* 3 Chấm */}
        <div
          className="flex flex-col items-center text-green-700 cursor-pointer"
          onClick={toggleMenu}
        >
          <i className="fas fa-ellipsis-h text-xl"></i>
          <span className="text-sm">Khác</span>
        </div>

        {expanded && scrollDirection === "up" && (
          <div className="bg-white rounded-tl-md rounded-tr-md shadow:sm p-4 absolute right-1 top-0 -translate-y-full w-[150px]">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="text-green-700 text-sm flex justify-between w-full items-center">
                <span>Thông tin</span>
                <i className="far fa-user text-sm"></i>
              </div>
              <div className="text-green-700 text-sm flex justify-between w-full items-center">
                <span>Đề thi</span>
                <i className="far fa-edit text-sm"></i>
              </div>
              <div className="text-green-700 text-sm flex justify-between w-full items-center">
                <span>Hỏi đáp</span>
                <i className="far fa-comments text-sm"></i>
              </div>
              <div className="text-green-700 text-sm flex justify-between w-full items-center">
                <span>Tài liệu</span>
                <i className="far fa-file-alt text-sm"></i>{" "}
              </div>
              <div className="text-green-700 text-sm flex justify-between w-full items-center">
                <span>SBD</span>
                <i className="fas fa-search text-sm"></i>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuTabView;
