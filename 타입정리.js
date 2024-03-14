// 타입 - Boolean
var isBoolean;
isBoolean = true;
var isDone = false;
// 타입 - Number
// 정적 타입이라 해서 C / JAVA 처럼 int, float, double 타입은 없고, Javascipt의 number 자료형을 그대로 사용한다.
// 16진수, 10진수, 2진수, 8진수 리터럴도 지원한다.
var num;
var integer = 6;
var float = 3.14;
var hex = 0xf00d; // 61453
var binary = 10; // 10
var octal = 484; // 484
var infinity = Infinity;
var nan = NaN;
function plus(num1, num2) {
    return num1 + num2;
}
// 타입 - String
// 작은따옴표('), 큰따옴표(") 뿐만 아니라 ES6의 템플릿 문자열도 string 타입에 포함 된다.
var red = "Red";
var green = "Green";
var yourColor = "Your color is" + green;
var myColor = "My color is ".concat(red, ".");
function strings(str1, str2) {
    return str1 + str2;
}
// 타입 - Array
// 배열 타입은 두 가지 방법으로 쓸 수 있다.
// 첫 번째 방법은 배열 요소들을 나타내는 타입 뒤에 []를 쓰는 것이고,
// 두 번째 방법은 Array<> 배열 타입을 쓰는 것이다.
var fruits = ["Apple", "Banana", "Mango"];
// or
// let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];
// 오직 숫자 아이템만 허용
var nums = [100, 101, 102];
// 오직 문자 아이템만 허용
var strs = ["apple", "banana", "melon"];
// 오직 불리언 아이템만 허용
var boos = [true, false, true];
// 모든 데이터 타입을 아이템으로 허용 (any 타입 - 뒤에서 배움)
var someArr = [0, 1, {}, [], "str", false];
// 특정 데이터 타입만 아이템으로 허용 (union 타입 - 뒤에서 배움)
var selects = [102, "apple"];
// 나머지 매개변수(스프레드 연산자) 를 이용한 배열 반환 함수
function getArr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
getArr(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
// 타입 - Object
// 자바스크립트에서의 object는 객체 뿐만 아니라 배열, 함수 까지 object로 포함한다.
// 타입스크립트에서도 마찬가지라서 기본적으로 typeof 연산자가 "object"로 반환하는 모든 타입을 뜻한다.
var obj = {};
var arr = [];
var func = function () { };
var nullValue = null;
var date = new Date();
var userA = {
    name: "HEROPY",
    age: 123,
};
var userB = {
    name: "inpa",
    age: 12,
    // age: false, // Error
    //   email: "inpa@naver.com", // Error
};
// 더 많은 자료는 https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8-%EC%A2%85%EB%A5%98-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC
