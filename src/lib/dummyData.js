// 경로 : src/lib/dummyData.js

export const dummyData = {
    "0": {
      id: "0",
      name: "John",
      phone: "010-0000-0000"
    },
    "1": {
      id: "1",
      name: "Peter",
      phone: "010-1111-1111"
    },
    "2": {
      id: "2",
      name: "Elise",
      phone: "010-2222-2222"
    },
    "3": {
      id: "3",
      name: "Chris",
      phone: "010-3333-3333"
    },
    "4": {
      id: "4",
      name: "Austin",
      phone: "010-4444-4444"
    },
    "5": {
        id: "5",
        name: "Adam",
        phone: "010-5555-5555"
      }
  };
  //nextId 라는 변수를 추가해 이를 key 값으로 설정할 수 있게 함
  //Objec.keys : key 값으로 배열을 만들어 반환하는 함수
  export var nextId=Object.keys(dummyData).length;
  //setNextId 함수 통해 데이터 추가할 때마다 nextId 값 1씩 늘려줌
  export const setNextId=()=>{
    nextId++;
  }