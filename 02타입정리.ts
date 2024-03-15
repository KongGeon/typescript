////----------------------------- 타입 - Boolean

let isBoolean: boolean;
isBoolean = true;

let isDone: boolean = false;

////----------------------------- 타입 - Number

// 정적 타입이라 해서 C / JAVA 처럼 int, float, double 타입은 없고, Javascipt의 number 자료형을 그대로 사용한다.
// 16진수, 10진수, 2진수, 8진수 리터럴도 지원한다.
let num: number;
let integer: number = 6;
let float: number = 3.14;

let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484

let infinity: number = Infinity;
let nan: number = NaN;

function plus(num1: number, num2: number): number {
  return num1 + num2;
}

////----------------------------- 타입 - String

// 작은따옴표('), 큰따옴표(") 뿐만 아니라 ES6의 템플릿 문자열도 string 타입에 포함 된다.

let red: string = "Red";

let green: string = "Green";
let yourColor: string = "Your color is" + green;

let myColor: string = `My color is ${red}.`;

function strings(str1: string, str2: string): string {
  return str1 + str2;
}

//----------------------------- 타입 - Array

// 배열 타입은 두 가지 방법으로 쓸 수 있다.
// 첫 번째 방법은 배열 요소들을 나타내는 타입 뒤에 []를 쓰는 것이고,
// 두 번째 방법은 Array<> 배열 타입을 쓰는 것이다.

let fruits: string[] = ["Apple", "Banana", "Mango"];
// or
// let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];

// 오직 숫자 아이템만 허용
let nums: number[] = [100, 101, 102];

// 오직 문자 아이템만 허용
let strs: string[] = ["apple", "banana", "melon"];

// 오직 불리언 아이템만 허용
let boos: boolean[] = [true, false, true];

// 모든 데이터 타입을 아이템으로 허용 (any 타입 - 뒤에서 배움)
let someArr: any[] = [0, 1, {}, [], "str", false];

// 특정 데이터 타입만 아이템으로 허용 (union 타입 - 뒤에서 배움)
let selects: (number | string)[] = [102, "apple"];

// 나머지 매개변수(스프레드 연산자) 를 이용한 배열 반환 함수
function getArr(...args: number[]): number[] {
  return args;
}
getArr(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

////----------------------------- 타입 - Object

// 자바스크립트에서의 object는 객체 뿐만 아니라 배열, 함수 까지 object로 포함한다.
// 타입스크립트에서도 마찬가지라서 기본적으로 typeof 연산자가 "object"로 반환하는 모든 타입을 뜻한다.

let obj: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null;
let date: object = new Date();

// 이처럼 여러 타입의 상위 타입으로 인식되기 때문에 타입스크립트에서 object를 그대로 타입으로 쓰기에는 애로사항이 많다.
// 따라서 정말 객체에 타입을 지정해주고 싶다면 다음과 같이 객체 속성(Properties)들에 대한 타입을 개별적으로 지정하는 식으로 사용하면 된다.

// type alias
type IUser = {
  name: string;
  age: number;
};

let userA: IUser = {
  name: "HEROPY",
  age: 123,
};

let userB: IUser = {
  name: "inpa",
  age: 12,
  // age: false, // Error
  //   email: "inpa@naver.com", // Error
};

////----------------------------- 타입 - Any

let any: any = 123;
any = "Hello world";
any = {};
any = null;

let list: any[] = [1, true, "free"];
list[1] = 100;

// 명시적으로 any 타입 지정
let product_id: any = 124981;
product_id = "p9023412"; // any 유형이 설정되었으므로 어떤 유형도 값으로 할당 가능

// 암시적으로 any 타입 지정
// let product_id;
product_id = 124981;
product_id = "p9023412";

////----------------------------- 타입 - Unknown
let a: any = 123;
let u: unknown = 123;

// any는 어떤 것이든지 타입을 허용한다는 뜻이다.
// unknown은 알 수 없다, 모른다의 어감이 강하다.
// Unknown이 any보다 조금 더 안전함 => 이유는 Unknown으로 처음에 설정후 나중에 특정 데이터를 넣으면 해당 데이터의 자료형에 따라서 타입이 설정되지만 any는 정말 이후로 아무거나 와도 에러를 내보내지 않음

// 더 많은 자료는 https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8-%EC%A2%85%EB%A5%98-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC
