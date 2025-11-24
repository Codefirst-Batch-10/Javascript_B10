var std = {
  fname: "lassan",
  lname: "adrak",
  age: 34,
  getFullName: function () {
    var fullName = this.fname + " " + this.lname;
    console.log(fullName);
  },
};

std.getFullName();

// std.fname = "Kadakkk";
// std.getFullName();

let getHobbies = function (hobby1, hobby2) {
  console.log(
    this.getFullName() + " is having hobbies like " + hobby1 + " and " + hobby2
  );
};

getHobbies.call(std, "watching Movies", " Cricket");
getHobbies.apply(std, ["watching Movies", " Cricket"]);
