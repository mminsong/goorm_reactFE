// 경로 : src/components/Number.js

import React from "react";
import styled from "styled-components";

const Count = styled.div`
  padding: 5px 0;
  width: 200px;
  text-align: center;
  border: 1px solid black;
  font-size: 2rem;
`;

//props : 부모 컴포넌트에게서 받는 데이터
//const Number = (props) => {
//  return <Count>{props.number}</Count>;
//};
// Destructing Assignment 문법을 통해 props 안에 있는 number를 가져옴
const Number = ({ number }) => {
  return <Count>{number}</Count>;
};

export default Number;
