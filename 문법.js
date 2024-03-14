//-----------변수에 바로 타입 지정
var 이름 = "kim"; // string 타입지정
var array = ["kim", "park"]; //array 타입지정
var object = { 이름: "kim" }; //object 타입 지정
var object2 = {}; //이름? 이런식으로 적어놓으면 데이터가 들어와도 되고 안들어와도 되는 옵션임을 표기
var 이름2 = "122"; // string 혹은 number 타입지정, 유니온타입
var 이름3 = "122"; // 타입을 따로 생성하고 선언해서 위와 같은 타입을 가지게됨
//-----------함수 타입 지정
function 함수명(x) {
    return x * 2;
}
var john = [100, false];
var 철수 = {
    age: 50,
    weight: 100,
};
//------------클래스
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
