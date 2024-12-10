import HeaderView from "@/components/Layout/Header/HeaderView";
import SideBarLeftView from "@/components/Layout/SideBarLeft/SideBarLeftView";
import SideBarRight from "@/components/Layout/SideBarRight/SideBarRightView";
import FooterView from "@/components/Layout/Footer/FooterView";

export default function HomeView() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex flex-1">
        <aside className="hidden md:block shadow-md">
          <SideBarLeftView />
        </aside>

        <main className="flex-1 p-4 bg-gray-100">
        </main>

        <aside className="hidden lg:block shadow-md">
          <SideBarRight />
        </aside>
      </div>

      <FooterView />
    </div>
  );
}
