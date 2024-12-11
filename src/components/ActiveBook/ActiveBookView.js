import CardView from "../Card/CardView";
import { CARD_TYPE } from "../Card/useCard";
import HeaderView from "../Layout/Header/HeaderView";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import SideBarRight from "../Layout/SideBarRight/SideBarRightView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import BookCardView from "./BookCard.js/BookCardView";
import BookCategoryView from "./BookCategory/BookCategoryView";

const ActiveBookView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex bg-gray-100 flex-col md:flex-row">
        <div className="md:max-w-xs">
          <BookCategoryView />
        </div>
        <main className="flex-1 px-4 py-12">
          <BookCardView />
        </main>
      </div>

      <FooterView />

      <MenuTabView />
    </div>
  );
};

export default ActiveBookView;
