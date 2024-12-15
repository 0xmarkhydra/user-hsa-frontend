import React from "react";
import HeaderView from "../Layout/Header/HeaderView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import useDetailBook from "./useDetailBook";
import BookSection from "./BookSection/BookSectionView";
import BookThumbnailView from "./BookSection/BookThumbnailView";

const DetailBookView = () => {
  const { sections, book, onClickSection } = useDetailBook();
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex min-h-screen w-full">
        <aside className="hidden md:block shadow-sm">
          <SideBarLeftView />
        </aside>

        <main className="w-full xs:flex-1 p-4 bg-gray-100">
          <BookThumbnailView
            urlImg={book.urlImg}
            bookName={book.bookName}
            userAuthor={book.userAuthor}
            tagName={book.tagName}
            startNum={book.startNum}
            expireDate={book.expireDate}
            book={book}
          />
          <div className="mb-12">
            <BookSection onClick={onClickSection} data={sections} />
          </div>
        </main>
      </div>

      <FooterView />

      <MenuTabView />
    </div>
  );
};
export default DetailBookView;
