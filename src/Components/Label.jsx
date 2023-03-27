import React from "react";
import styled from "styled-components";

const LabelText = styled.h3`
  display: inline-block;
  width: ${({ align }) => (align ? "7rem" : "4rem")};
  text-align: right;
  margin-right: 5px;
  color: rgb(175, 180, 177);
  font-weight: 500;
`;

const Colon = styled.h3`
  color: rgb(175, 180, 177);
  font-weight: 500;
  margin: 0px 0.3em;
`;

const Textdetails = styled.h3`
  margin-left: 0.5em;
  width: 14rem;
  color: rgb(94, 95, 94);
`;

function Label({ label, item, align = true }) {
  return (
    <div style={{ display: "flex", padding: "5px" }}>
      <LabelText align={align}>{label} </LabelText>
      <Colon> : </Colon>
      <Textdetails> {item}</Textdetails>
    </div>
  );
}

export default Label;
