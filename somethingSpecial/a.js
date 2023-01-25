
let s = Symbol()
let obj = {
    name: "Abhishek",
    [s] : "Try changing this value",  // ready only value for others
    age: 26
}
obj[s] = "I have changed"


function transfer(){
    return obj
}


export default transfer