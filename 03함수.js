function 함수1(x) {
    return x * 2;
}
//   함수1(); //불가능
function 함수2(x) { } // x? :number 는 x :number | undefined 와 같다
함수2(); //가능
함수2(2); //가능
function 함수3(x) {
    // return x * 2  //void 들어가면 리턴을 하지 않음
}
