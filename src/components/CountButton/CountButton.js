// 경로 : src/components/CountButton.js
// 버튼 안에 들어갈 텍스트와 클릭 시 실행될 함수를 props로 전달
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 20px;
  font-weight: 700;
  width: 50px;
  padding: 10px 0;
  border: 1px solid black;
  background: white;

  & + & {
    margin-left: 10px;
  }
`;

const CountButton = ({ onClick, text }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default CountButton;
