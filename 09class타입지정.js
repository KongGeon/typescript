var Person4 = /** @class */ (function () {
    function Person4(a) {
        this.name = a;
        this.age = 20;
    }
    Person4.prototype.add = function (숫자) {
        console.log(숫자 + 1);
    };
    return Person4;
}());
