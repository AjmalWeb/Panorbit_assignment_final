import React from "react";
import ComingSoon from "../Components/ComingSoon";
import ContainerLayout from "./ContainerLayout";
import Header from "../Components/Header";


function Posts() {
  return (
    <ContainerLayout>
      <Header title="Posts" />
      <ComingSoon/>
    </ContainerLayout>
  );
}

export default Posts;
