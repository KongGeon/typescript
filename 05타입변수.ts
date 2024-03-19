// ------------------let 동물 :string | number | undefined; //이렇게 하면 길자나

type Animal = string | number | undefined; //타입은 대문자로 시작
let 동물: Animal = 123;

// ------------------object 도 가능
type 사람 = {
  name: string;
  age: number;
};

let teacher1: 사람 = { name: "john", age: 20 };
//   타입 키워드 안쓰면 이렇게 만들어야 함
let teacher2: {
  name: string;
  age: number;
} = { name: "john", age: 20 };

//------------------오브젝트 내부 잠그기 readonly
type Girlfriend = {
  readonly name: string;
};

let 여친: Girlfriend = {
  name: "엠버",
};

//   여친.name = '유라' //readonly라서 에러남, 근데 사실 에러만 나올 뿐. 자바스크립트로 바꾸면 되긴 함

// ------------------옵션, 들어올 수도 있고 안들어올 수도 있고
type Square = {
  color?: string;
  width: number;
};

let 네모2: Square = {
  width: 100,
};

//------------------타입 합치기
// 1
type Name3 = string;
type Age3 = number;
type Person3 = Name3 | Age3; // 이런식으로 합칠 수도 있음

// 2
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };

////------------------타입은 재정의가 불가능
type Name4 = string;
// type Name = number;
