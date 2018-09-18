/*
  constructor에서 this.color를 사용하기 전에
  해당 property를 멤버변수로 선언해놓고 사용해야 한다.
 */
var Car = /** @class */ (function () {
    function Car(color) {
        if (color === void 0) { color = 'Red'; }
        this.color = color;
    }
    return Car;
}());
var car = new Car();
console.log(car.color);
//# sourceMappingURL=car.js.map