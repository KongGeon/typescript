//특정 데이터만 들어올 수 있도록 지정할 수도 있음
let johnson: "대머리";
let kims: "솔로";

function 함수(a: "hello"): 1 | 0 | -1 {
  //함수에 넣기 좋음, 특정 데이터만 넘어오도록
  return 1;
}

function 함수4(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

var 자료 = {
  name: "kim",
} as const; // 타입 지정할때 원래 스트링으로 들어가게 되는데 as const 를 적으면
//타입도 kim으로 지정되게 됨, 그리고 readonly 속성까지도 들어가서 수정 불가능

function 내함수(a: "kim") {}
내함수(자료.name);
