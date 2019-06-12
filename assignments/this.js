/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding = targets the window object which is global scope for all of javascript.
* 2. Implicit Binding = when the function is invoked, look to the left of the "."
* 3. Explicit Binding = explicitly saying what "this" is by .call/.apply outside the scope of the function
* 4. New Binding = constructor functions are capitalized and invoked with "new" keyword, its bound to the "this" of "new". 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var age = function() {
    console.log(this.age); //targets the window
}

// Principle 2

// code example for Implicit Binding
var myName = {
    name: 'Anthony',
    age: 29,
    sayName: function() {
        return this.name; //left of "." is "this" = myName
    }
};

console.log(myName.sayName()); //left of "." is ""

// Principle 3

// code example for New Binding

var Animal = function(color, type, name){
    this.color = color;
    this.type = type;
    this.name = name;
    console.log(`This animal is a ${this.name}, a type of ${this.type}, colored ${this.color}.`)
}

var dove = new Animal('white', 'bird', 'dove');


// Principle 4

// code example for Explicit Binding
var sayName = function() {
    console.log(`My name is ${this.name}.`);
};

var me = {
    name: 'Anthony',
    age: 29,
};


console.log(sayName.call(me));