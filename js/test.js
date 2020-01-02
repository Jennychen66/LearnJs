function deepCopy(obj){
    let cloneTarget = Array.isArray(obj) ? [] : {} ;
    // for(var item in obj){
    //     if(typeof(obj[item]) === 'object' ){
    //         cloneTarget[item] = deepCopy(obj[item]);
    //     }else{
    //         cloneTarget[item] = obj[item];
    //     }
    // } 
    Object.keys(obj).forEach(item =>{
        if(typeof(obj[item]) === 'object' ){
                    cloneTarget[item] = deepCopy(obj[item]);
                }else{
                    cloneTarget[item] = obj[item];
                }
    })
    return cloneTarget;
}
let testObj = {
    "are":{
        "name":"Jenny",
        "value":200,
    },
    "am":{
        "name":"Tom"
    }
};
let testObj2 = [1,2,3,4];
let objRlt2 = deepCopy(testObj2);
let objRlt = deepCopy(testObj);
console.log(objRlt);
console.log(objRlt2);
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello : ${this.name}`);
    }
}

let person = new Person("Jenny", 10);
person.sayHello();
class Author extends Person{
    constructor(name,age,book){
        super(name,age);
        this.book = book;
    }
    sayHello(){
        console.log(`Hello : ${this.name}, your age is ${this.age},your book is ${this.book}`);
    }
    printBook(){
        console.log(`famouse books ${this.book}`);
        super.sayHello();
    }
    
}
var author = new Author("Tom",23,"Linux");
author.printBook();
author.sayHello();
let str = "234_jenny_chen";
let str2 = str.split("_").join(",");
console.log(str2);
//this key words

var Persons = function(name, age){
    return {
        name: name,
        age: age,
        sayHello(){
            console.log(this.name);
        },
        mother:{
            name:"Jimi",
            sayHello(){
                console.log(this.name);
            }
        }
    }
}

let me = Persons("Tom",10);
me.sayHello();
me.mother.sayHello();

var stacy = {
    name : "Stacy",
    age:33
}
var sayName = function(lan1,lan2,lan3){
    console.log(`Hello ${this.name}, and I know ${lan1},${lan2} and ${lan3}`);
}
let language = ["Javascript","Java","C++"];
sayName.call(stacy,language[0],language[1],language[2]);
sayName.apply(stacy,language);
var newFn = sayName.bind(stacy,language[0],language[1],language[2]);// not invork but return a new function
console.log("bind");
newFn();
// new binding
var Animal = function(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
}
let an = new Animal("dog",12,"butty-dog");
console.log(an);
// window binding 
var sayAge = function(){
   // 'use strict';
    console.log(this.age);
};

sayAge.call(an);
console.log(an.__proto__ === Animal.prototype);//true
//When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) which has a constructor property by default.
// 一个class 的 prototype 和 其 instance 的 __proto__ 是相同的
// 每个prototype 都有一个固有属性constructor ,指向函数本身
console.log(Animal.prototype.constructor === Animal); // true
// 有__proto__ 说明它是一个 instance, 那么就有一个function，作为他的父类，含有prototype
//prototype of Object doesn't have a  __proto__
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.prototype.constructor === Function);//true
//
function Human(name, age){
    // name,age,friends are seperate between different instances 
    this.name = name;
    this.age = age;
    this.friends = ["Jadeja","vivi"];
}
// prototype can be shared between different objects
//As prototype object is shared among all the objects created using the constructor function
Human.prototype.sayName = function(){
    console.log(this.name);
}


var human1 = new Human("xiaoming",12);
var human2 = new Human("xiaohuang",40);

console.log(human1.__proto__ === human2.__proto__);
// 都指向Human的prototype
console.log(human1.sayName  === human2.sayName);
human1.friends.push("xiaohong");
console.log(human1.friends);
console.log(human2.friends);




