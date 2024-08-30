// 경로 : src/components/PhoneList/PhoneList.js

import React from "react";
//import "./PhoneList.css";
import PhoneItem from "../PhoneItem";

//styled-components는 css 코드를 javascript 코드 내에 작성하는 형태의 스타일링 방법
//CSS/Sass 파일을 작성할 필요없이 하나의 파일 안에서 스타일까지 모두 설정 가능
//이와 같은 라이브러리를 CSS-in-JS 라이브러리라고 부름
import styled from "styled-components";

//styled-components는 styled.[태그명]을 통해 스타일링 된 컴포넌트 생성
const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PhoneList = () => {
  return (
    <div className="phone_list">
      <PhoneItem />
      <PhoneItem />
      <PhoneItem />
    </div>
  );
};

export default PhoneList;
