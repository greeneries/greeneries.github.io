/*
  constructor에서 this.color를 사용하기 전에
  해당 property를 멤버변수로 선언해놓고 사용해야 한다.
  대신, 생성자 파라미터 앞에 public 접근자를 붙여주면
  멤버변수처럼 선언하지 않아도 된다.
 */
var Boat = /** @class */ (function () {
    //color: string;
    function Boat(color) {
        if (color === void 0) { color = 'Red'; }
        this.color = color;
        this.color = color;
    }
    Boat.prototype.print = function () {
        console.log(this.color);
    };
    return Boat;
}());
var boat = new Boat();
// private 해당 변수는 Boat 클래스 안에서만
// 접근할 수 있다. ( 그렇게 써 주세요! )
console.log(boat.color);
//# sourceMappingURL=boat.js.map