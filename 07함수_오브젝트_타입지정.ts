// 함수 타입지정
type 함수타입 = (x: number, y: number) => number; //=> 리턴타입
let ABC: 함수타입 = function (x, y) {
  return x + y;
};

// 오브젝트 타입지정
// 1
type Member1_1 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};
type Member1_2 = {
  age2: number;
} & Member1_1; //이런식으로 extends 비슷하게 구현가능, 하지만 두가지 타입을 모두 만족해야 한다는 뜻이므로 같은 extends와 같은 것은 아님

// 2
interface Member2_1 {
  // '=' 없음, interface는 extends가 가능
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
}
interface Member2_1 {
  //extends는 중복선언도 가능
  name2: string;
}
interface Member2_2 extends Member2_1 {
  age2: number; //이런식으로 extends 가능
}

let 회원정보: Member1_1 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

// 콜백함수 타입 지정

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash); //1011112222 출력잘됨
