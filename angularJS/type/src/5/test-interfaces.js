var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello, ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('Everybody');
console.log(greeter);

var result = greeter.greet();
console.log(result);
//# sourceMappingURL=test-interfaces.js.map
