var isCool = true;
//number
var age = 56;
//string
var eyeColor = "blue";
var favoriteQuote = "I'm not old.i'm only ".concat(age);
//Array
var pets = ["cat", "dog", "pig"];
var pets2 = ["dragon", "Ibex", "MonkeySpider"];
//Objects
var wizard = {
    a: "John",
};
//null and undefined
var meh = undefined;
var nah = null;
//Tuple
var basket;
basket = ["Basketball", 26111];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
//Any - !!!!!!!! Be Careful
var whatEver = "avoooooiiid thiiiiiis!!!";
whatEver = "looper";
//void
var chant = function () {
    console.log("oooooommmmmmmmmm");
};
// never
var error = function () {
    throw Error("oooopss");
};
var fightrobotArmy = function (robots) {
    console.log("Fight");
};
var fightrobotArmy3 = function (robots) {
    console.log("Fight");
};
var fightrobotArmy2 = function (robots) {
    console.log("Fight");
};
var dog = {};
dog.count;
//Function
var fightrobotArmy4 = function (robots) {
    console.log("Fight!");
};
var fightrobotArmy5 = function (robots) {
    console.log("FIGHT!");
    return 26;
};
//Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalalalal hohoho ho";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("Dahaaaar");
lion.sing;
