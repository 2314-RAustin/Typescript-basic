var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**=============let String ===============*/
var varString = "hello world-";
varString.replace("!", "-");
console.log("Value: " + varString + " type: " + typeof (varString));
/**=============let mumber ===============*/
var varNumber = 22;
varNumber.toFixed();
console.log("Value: " + varNumber + " type: " + typeof (varNumber));
/**=============let boolean ===============*/
var varBoolean = false;
varBoolean.valueOf();
console.log("Value: " + varBoolean + " type: " + typeof (varBoolean));
/**============= let Any ===============*/
//This variable can asignee any type value
var varAny = "Hello";
varAny = 22;
varAny = false;
console.log("Value: " + varAny + " type: " + typeof (varAny));
/**=============Array any ===============*/
var varArrayAny = ["", "", ""];
varArrayAny = [true, 2, ""];
console.log("Value: " + varArrayAny + " type: " + typeof (varArrayAny));
/**=============Array string ===============*/
var varArrayString = ["", "", ""];
//ERROR
//varArrayString = [1,2,3];
varArrayString = ["Hello", "World", "!"];
console.log("Value: " + varArrayString + " type: " + typeof (varArrayString));
/**=============Array number ===============*/
var varArrayNumber = [1, 2, 3, 4];
//Error
//varArrayNumber = ["","","",""];
varArrayNumber = [5, 6, 7, 8];
console.log("Value: " + varArrayNumber + " type: " + typeof (varArrayNumber));
/**=============Array boolean ===============*/
var varArrayBoolean = [false, true, false, true];
//Error
//varArrayNumber = ["","","",""];
varArrayBoolean = [true, false, true, false];
console.log("Value: " + varArrayBoolean + " type: " + typeof (varArrayBoolean));
/**=============Tupla ===============*/
var varTupla;
varTupla = ["asdas", false];
//ERROR
//varTupla = ["asdas", false, [], ""];
console.log("Value: " + varTupla + " type: " + typeof (varTupla));
/**=============undifined, null ===============*/
//undifined, null
var myNull = null;
var myUndifines = undefined;
console.log("Value: " + myNull + " type: " + typeof (myNull));
console.log("Value: " + myUndifines + " type: " + typeof (myUndifines));
/**=============function specific return type number===============*/
function getSum(number1, number2, number3) {
    return number1 + number2 + number3;
}
console.log("Value: " + getSum + " type: " + typeof (getSum));
/**=============function parameters string | number ===============*/
var sum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log("Value: " + sum + " type: " + typeof (sum));
/**=============function ? (No required)===============*/
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return "" + firstName;
    }
    return firstName + " " + lastName;
}
console.log("Value: " + getName + " type: " + typeof (getName));
/**=============function not returned value (:void)===============*/
function myVoidFunction() {
}
console.log("Value: " + myVoidFunction + " type: " + typeof (myVoidFunction));
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
/**=============Object declared type interfaze ===============*/
var myTodo = { title: 'Title', text: "Text" };
/**============= Object oriented programming ===============*/
/**============= class ===============*/
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    User.prototype.showMeAge = function () {
        console.log("" + this.age);
    };
    User.prototype.ageInYears = function () {
        console.log(this.age + " years");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var user = new Member(1, 'Roberto', 'm.austin14.00@gmail.com', 23);
console.log(user.payInvoice());
