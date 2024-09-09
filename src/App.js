// 경로 : src/App.js

import React, { Component } from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { dummyData, nextId, setNextId } from "./lib/dummyData.js";

class App extends Component {
  state = {
    dummyData,
    name: "",
    phone: ""
  }
  
  //handleInput이라는 함수 만들어 이를 InputBox 컴포넌트에 Props로 전달
  handleInput = e=>{
    this.setState({
      //e.target : 해당 이벤트가 발생한 element 가리킴
      //e.target.name : 이벤트가 발생한 Element의 name 속성값 가져오는것
      //e.target.value : 이벤트가 발생한 Element의 value 속성값을 가져오는 것
      [e.target.name]: e.target.value
    });
  };
  
  //handleSubmit 함수 만들고 onSubmit이라는 이름의 props를 InputBox에 전달
  handleSubmit = () =>{
    //state로부터 dummyData, name, phone 받아와 name 값과 phone 값이 각각 빈값인지 체크해줌
    const {dummyData,name, phone} =this.state;
    if(name==="" || phone==="") return;

    //입력받은 값을 dummyData에 추가
    this.setState({
      dummyData: {
        ...dummyData,
        //입력 버튼이 눌리면 input 태그 값을 모두 지워주기 위해 name, phone 값을 빈 값으로 설정
        [nextId]: {
          id: nextId,
          name, phone
        }
      },
      name: "",
      phone: ""
    });

    setNextId();
  }

  handleRemove=id=>{
    //[id]:_ : 제거하고 싶은 아이템을 _라는 변수에 할당
    //Spread 문법 통해 앞에서 제외한 아이템을 뺀 데이터를 dummyData에 저장
    const{[id]:_, ...dummyData}=this.state.dummyData;
    //setState 함수에 dummyData 넘겨주면 불변성 위반하지 않고 올바르게 데이터 변경 가능
    this.setState({dummyData});
  };

  render() {
    const {handleInput, handleSubmit,handleRemove}=this;
    const{dummyData, name, phone } =this.state;

    return (
      <div className="container">
        <InputBox 
        name={name}
        phone={phone}
        onChange={handleInput}
        onSubmit={handleSubmit}
        />
        <PhoneList list={dummyData} deleteItem={handleRemove}/>
      </div>
    );
  }
}

export default App;