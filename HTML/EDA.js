console.log("A")
setTimeout(() => {
    console.log("D")
},2000)
setTimeout(() => {
    console.log("B")
}, 0)
console.log("C")


//Function Example
function example(){
    console.log("Hi")
}

const example1 = ()=>{
    console.log("Hello")
}

const promise = new Promise((resolve, reject) => {
    setTimeout(example, 2000)
    setTimeout(example1, 0)
    // const success = true;
    // if(success){
    //     console.log("Done")
    // }
    // else{
    //     console.log("Fail")
    // }
})
promise.then(res => {console.log(res)})
.catch(err=>console.log(err))


