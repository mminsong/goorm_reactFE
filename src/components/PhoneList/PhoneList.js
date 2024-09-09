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

const PhoneList = ({ list, deleteItem }) => {
  return (
    <PhoneWrapper>
      
      {//Json 데이터의 value 값으로만 이루어져 있는 배열 생성
      //map 함수 통해 데이터 개수만큼 PhoneItem 컴포넌트 만들고 데이터 값을 props로 전달
      Object.values(list).map(item => { 
        //key : map 함수 통해 반복적으로 컴포넌트 생성해줄 때 필수적으로 넣어야하는 속성
        //key 값을 지정해준다면 그 값을 통해 업데이트된 부분을 빠르게 잡아낼 수 있어 속도가 향상됨
        return <PhoneItem {...item} key={item.id} onClick={deleteItem} />;
      })}
    </PhoneWrapper>
  );
};

export default PhoneList;
