import HeaderView from "../Layout/Header/HeaderView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import BookCardView from "./BookCard/BookCardView";
import BookCategoryView from "./BookCategory/BookCategoryView";
import useActiveBook from "./useActiveBook";
import useBookCard from "./BookCard/useBookCard";

const ActiveBookView = () => {
  const { activeBooks } = useActiveBook();
  const { currentData, currentPage, totalPages, goToPage } =
    useBookCard(activeBooks);
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex bg-gray-100 flex-col md:flex-row">
        <div className="lg:max-w-xs max-w-[250px]">
          <BookCategoryView />
        </div>
        <main className="flex-1 px-4 py-12">
          <BookCardView
            currentData={currentData}
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
          />
        </main>
      </div>

      <FooterView />

      <MenuTabView />
    </div>
  );
};

export default ActiveBookView;
