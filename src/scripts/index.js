import "../styles/index.scss";
import "./events";

const user = {
  name: "Adelina",
  lastName: "Borodina",
  age: 15,
  dateOfBirth: "08.04.2004",
  height: 169,
  haveAnAnimal: true,
  favoriteFood: ["lasagna", " barbecue", " Napoleon cake"],
  getInformation: function() {
    console.log(
      "Name",
      this.name + ", Lastname",
      this.lastName + ", Date of birth",
      this.dateOfBirth
    );
  }
};

console.log(user.name);
console.log(user.lastName);
console.log(user.age);
console.log(user.dateOfBirth);
console.log(user.height);
console.log(user.haveAnAnimal);
console.log(user.favoriteFood[0] + user.favoriteFood[1] + user.favoriteFood[2]);
user.getInformation();

// console.log("Desktop -> Electron");
// console.log("Smartphone & Tablet -> Cordova");
// console.log("Server -> Node.js");
// console.log("---History---");
// console.info("1995 - Netscape");
// console.info("1997 - ECMA Standart");
// console.log("Ecma Script = JavaScript");
// console.log("1999 - EcmaScript 3");
// console.log("2009 - EcmaScript 5");
// console.log("2015 - EcmaScript 2015 -> ES6");
// console.log(">2015 - new releases");
