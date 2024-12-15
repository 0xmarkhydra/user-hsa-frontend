import HeaderView from "@/components/Layout/Header/HeaderView";
import SideBarRight from "@/components/Layout/SideBarRight/SideBarRightView";
import FooterView from "@/components/Layout/Footer/FooterView";
import SearchSugestion from "./SearchSuggestion/SearchSugestionView";
import TeacherSuggestionView from "./TeacherSuggestion/TeacherSuggestionView";
import CardView from "../Card/CardView";
import { CARD_TYPE } from "../Card/useCard";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import ModalActiveBook from "../Modal/ModalActiveBook/ModalActiveBookView";
import useModalActiveBook from "../Modal/ModalActiveBook/useModalActiveBook";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import dynamic from "next/dynamic";
import FeedBackView from "../FeedBack/FeedBackView";

const SideBarLeftView = dynamic(
  () => import("@/components/Layout/SideBarLeft/SideBarLeftView"),
  { ssr: false }
);

export default function HomeView() {
  const router = useRouter();
  const { userInfo } = useUserInfo();

  console.log(JSON.stringify(userInfo, null, 4));

  const { open, onOpenModal, onCloseModal, onSubmit, isSubmitting } =
    useModalActiveBook();

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex min-h-screen w-full">
        <aside className="hidden md:block shadow-sm">
          <SideBarLeftView />
        </aside>

        <main className="w-full xs:flex-1 p-4 bg-gray-100 overflow-y-scroll max-h-screen mb-6">
          <button
            onClick={onOpenModal}
            class="w-full bg-[#4CAF50] text-white py-3 rounded-lg my-3 flex items-center justify-center lg:hidden"
          >
            <i class="fas fa-mars mr-2"></i>
            Kích hoạt sách
          </button>
          <SearchSugestion />
          <TeacherSuggestionView />
          <CardView type={CARD_TYPE.EXAM} />
          <CardView type={CARD_TYPE.COURSE} />
          <CardView type={CARD_TYPE.BOOK} />
          <FeedBackView title={"Vinh danh học sinh 2k6"} />
          <FeedBackView title={"Phản hồi của học sinh"} />
        </main>

        <aside className="hidden xl:block shadow-sm">
          <SideBarRight onOpenModal={onOpenModal} />
        </aside>
      </div>

      <FooterView />

      <MenuTabView />

      <ModalActiveBook
        isOpen={open}
        onClose={onCloseModal}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}
