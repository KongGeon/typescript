function 에러함수(x: number | string) {
  // return x + 1  //에러남 , 이게 넘버인지 스트링인지 알수가 없으니 에러가 나는 것임
}

//narrowing
function 내로잉(x: number | string) {
  if (typeof x === "number") {
    //타입이 넘버가 맞는 지 확인, 이렇게 확인해서 넘기는걸 narrowing이라고 함
    return x + 1;
  } else if (typeof x === "string") {
    return x + "1";
  } else {
    return 0;
  }
}

//assertion (타입 덮어쓰기)
function 어썰션(x: number | string) {
  // <number>x + 1;   //옛날문법
  return (x as number) + 1; //용도: 어떤타입이 들어올지 확실할때, assertion보다는 if같은걸로 narrowing하는 것이 좋겠음, 안쓰는 것이 좋아보임, 남의 코드 수정할때 사용.., 비상용
}
console.log(어썰션(123));

// 가끔 이럴 때 유용하게 쓰임

type Person2 = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person2>('{"name":"kim"}');
// 함수에 데이터를 넣으면 as 타입명을 붙여서 return 하는 함수
// 이 함수에 자료를 입력하면 as 키워드로 타입을 하나 붙여줍니다.
