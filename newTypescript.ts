let isCool: boolean = true;

//number
let age: number = 56;

//string
let eyeColor: string = "blue";
let favoriteQuote: string = `I'm not old.i'm only ${age}`;

//Array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["dragon", "Ibex", "MonkeySpider"];

//Objects
let wizard: object = {
  a: "John",
};

//null and undefined
let meh: undefined = undefined;
let nah: null = null;

//Tuple
let basket: [string, number];
basket = ["Basketball", 26111];

//Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: number = Size.Small;

//Any - !!!!!!!! Be Careful
let whatEver: any = "avoooooiiid thiiiiiis!!!";
whatEver = "looper";

//void
let chant = (): void => {
  console.log("oooooommmmmmmmmm");
};

// never
let error = (): never => {
  throw Error("oooopss");
};

//interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightrobotArmy = (robots: RobotArmy) => {
  console.log("Fight");
};

interface RobotArmy3 {
  count: number;
  type: string;
  magic?: string; // "?" make it optional.
}

let fightrobotArmy3 = (robots: RobotArmy) => {
  console.log("Fight");
};

type RobotArmy2 = {
  count: number;
  type: string;
  magic: string;
};

let fightrobotArmy2 = (robots: RobotArmy) => {
  console.log("Fight");
};

//Type Assertion
interface catArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as catArmy;
dog.count;

//Function
let fightrobotArmy4 = (robots: RobotArmy): void => {
  console.log("Fight!");
};

let fightrobotArmy5 = (robots: {
  count: number;
  type: string;
  magic: string;
}): number => {
  console.log("FIGHT!");
  return 26;
};

//Classes
class Animal {
  sing: string = "lalalalal hohoho ho";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("Dahaaaar");
lion.sing;

//Union
let confused: string | number | boolean = true;

let z: number = 26;
z = 2611;
