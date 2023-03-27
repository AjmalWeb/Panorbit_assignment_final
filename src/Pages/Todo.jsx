import React from "react";
import ComingSoon from "../Components/ComingSoon";
import ContainerLayout from "./ContainerLayout";
import Header from "../Components/Header";
import Label from "../Components/Label";
import Sidebar from "../Components/Sidebar";

function Todo() {
  return (
    <ContainerLayout>
      <Header title="Todo" />
     <ComingSoon/>
    </ContainerLayout>
  );
}

export default Todo;
