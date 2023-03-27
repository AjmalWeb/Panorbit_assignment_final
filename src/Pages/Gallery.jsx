import React from "react";
import ComingSoon from "../Components/ComingSoon";
import ContainerLayout from "./ContainerLayout";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

function Gallery() {
  return (
    <ContainerLayout>
      <Header title="Gallery" />
      <ComingSoon/>
    </ContainerLayout>
  );
}

export default Gallery;
