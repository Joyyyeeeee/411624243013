// <!-- DOM architecture 
//      1.Access
//      2.Manipulate3.Create
//      4.Delete -->

// Variable Declaration - JS

// let - function-scope
// *Redeclaration - using let
// *Reassign - not using let

// var - block-scope
// *Redeclaration not available
// *Reassign 

// const - block
// *Redeclaration not available
// *Reassign not available

// Important Topics

// 1. Events
// 2. Event Handler
// 3. Event Listener


const first = 1;
const second = 2;

console.log(first);

const str = "Joy";
console.log(str);

//Array

const fruits = ["Apple","Banana","Grapes","Watermelon"]
console.log(fruits[0])

//Change Element
fruits[1] = "Orange"
console.log(fruits[1])

//Array of Different Data Types

const arr = [1,"Name",false,2.4]

console.log(arr)

// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[0])


for(let i = 0; i<arr.length; i++){
    console.log(arr[i])

}



const flower = document.getElementById("ptag")
flower.innerHTML = "This is my Flower Class"

function Plant(){
    console.log("I am writing about Plants")
}

const input = document.getElementById("eventListener")
const output = document.getElementById("Ptag")

input.addEventListener("input", ()=>{
    //To Write a Function Directly
    output.textContent = input.value
})

//p or h tag without html

const newvar = document.createElement("h1")//p
newvar.textContent = "New paragraph";
document.body.appendChild(newvar)

newvar.remove()
