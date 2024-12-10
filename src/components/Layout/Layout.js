import FooterView from "./Footer/FooterView";
import HeaderView from "./Header/HeaderView";
import SideBarLeftView from "./SideBarLeft/SideBarLeftView";
import SideBarRightView from "./SideBarRight/SideBarRightView";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <HeaderView />

      {/* Content with Sidebars */}
      <div className="flex flex-1">
        {/* Sidebar Left */}
        <aside className="hidden md:block shadow-md">
          <SideBarLeftView />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100">{children}</main>

        {/* Sidebar Right */}
        <aside className="hidden lg:block shadow-md">
          <SideBarRightView />
        </aside>
      </div>

      {/* Footer */}
      <FooterView />
    </div>
  );
};

export default Layout;
