//-----------변수에 바로 타입 지정
let 이름: string = "kim"; // string 타입지정

let array: string[] = ["kim", "park"]; //array 타입지정

let object: { 이름: string } = { 이름: "kim" }; //object 타입 지정
let object2: { 이름?: string } = {}; //이름? 이런식으로 적어놓으면 데이터가 들어와도 되고 안들어와도 되는 옵션임을 표기

//-----------타입 지정
type Name = string | number; //타입은 대문자로 시작하도록 약속
let 이름2: string | number = "122"; // string 혹은 number 타입지정, 유니온타입
let 이름3: Name = "122"; // 타입을 따로 생성하고 선언해서 위와 같은 타입을 가지게됨

//-----------함수 타입 지정
function 함수명(x: number): number {
  return x * 2;
}
//-----------arry 타입 순서로 지정
type Member = [number, boolean];
let john: Member = [100, false];

//-----------모든 object 속성 지정
type MyObject = {
  [key: string]: number; //[key :속성1] :속성2 이렇게 적어 놓으면 모든 요소에 해당 속성을 받음
};
let 철수: MyObject = {
  age: 50,
  weight: 100,
};

//------------클래스
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
