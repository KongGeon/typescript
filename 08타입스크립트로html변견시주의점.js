var 제목 = document.querySelector("#title");
//narrowing
// 방법1
if (제목 != null) {
    제목.innerHTML = "반갑소1";
}
// 방법2 : 이 방법을 가장 많이 씀
if (제목 instanceof HTMLElement) {
    //제목이 HTMLElement로부터 기인한 타입이냐?
    제목.innerHTML = "반갑소2";
}
// 방법3
var 제목2 = document.querySelector("#title"); //HTMLElement로 사기침, 자주 쓰면 안됨
제목2.innerHTML = "반갑소4";
//방법4
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    //옵셔널 체이닝 '?.'
    제목.innerHTML = "반갑소5";
}
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    //버튼이 addEventListener 가능하면 내로잉 성공
    alert("ㅎㅎ");
});
// HTMLElement HTMLAnchorElement HTMLImageElement 등등 타입이 많아서 잘 골라서 써야함
