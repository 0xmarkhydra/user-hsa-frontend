import { useRouter } from "next/navigation";

export const TYPE = {
    BOOK: 'book',
    QUESTION: 'question',
    MENU_BOOK: 'menu-book',
};

const useSearchResult = (item, type) => {
  const router = useRouter();

  const handleClick = () => {
    closeSearch && closeSearch();
    switch (type) {
      case TYPE.BOOK:
        if (item.active) {
          router.push(`/active-book/${item.id}`);
        } else {
          toast.error("Đối tượng chưa được kích hoạt!");
        }
        break;
      case TYPE.MENU_BOOK:
        if (item.active) {
          router.push(
            `/active-book/${item.book_id}/section/?type=${item.type}&sectionId=${item.id}`
          );
        } else {
          toast.error("Đối tượng chưa được kích hoạt!");
        }
        break;
      case TYPE.QUESTION:
        if (item.active) {
          router.push(
            `/active-book/${item.book_id}/section/?type=De&questionId=${item.id}`
          );
        } else {
          toast.error("Đối tượng chưa được kích hoạt!");
        }
        break;
      default:
        break;
    }
  };

  const itemHeader = () => {
    switch (type) {
      case TYPE.BOOK:
        return item.name;
      case TYPE.MENU_BOOK:
        return item.title;
      case TYPE.QUESTION:
        return (
          <div
            dangerouslySetInnerHTML={{ __html: item.question }}
            className="overflow-hidden w-full"
          ></div>
        );
      default:
        return "Unknown";
    }
  };

  return {
    handleClick,
    itemHeader,
  };
};

export default useSearchResult;