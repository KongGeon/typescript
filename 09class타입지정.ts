class Person4 {
  name;
  age; // js에서는 이런거 필요없는데 ts에서는 필요함
  constructor(a: string) {
    this.name = a;
    this.age = 20;
  }
  add(숫자: number) {
    console.log(숫자 + 1);
  }
}
