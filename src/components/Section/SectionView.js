import React from "react";
import HeaderView from "@/components/Layout/Header/HeaderView";
import SideBarLeftView from "@/components/Layout/SideBarLeft/SideBarLeftView";
import FooterView from "@/components/Layout/Footer/FooterView";
import MenuTabView from "@/components/Layout/MenuTab/MenuTabView";
import useSection from "./useSection";
import SectionContentView from "./SectionContent/SectionContentView";

const SectionView = () => {
  const { sectionData } = useSection();
  
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex min-h-screen w-full">
        <aside className="hidden md:block shadow-sm">
          <SideBarLeftView />
        </aside>

        <main className="w-full xs:flex-1 p-4 bg-gray-100">
          <SectionContentView data={sectionData} />

        </main>
      </div>

      <FooterView />

      <MenuTabView />
    </div>
  );
};

export default SectionView;
