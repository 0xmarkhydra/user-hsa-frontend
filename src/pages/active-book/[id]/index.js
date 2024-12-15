import dynamic from "next/dynamic";
import React from "react";

const DetaiBookView = dynamic(
  () => import("@/components/DetailBook/DetailBookView"),
  { ssr: false }
);

const DetaiBookPage = () => {
  return <DetaiBookView />;
};

export default DetaiBookPage;
