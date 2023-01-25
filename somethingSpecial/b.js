import transfer from './a.js'


let transfer_by_b = transfer()
// for( let t in transfer_by_b){
//     console.log(t)
// }

let s = Symbol()

transfer_by_b[s] = "Have I changed!"


transfer_by_b.name = "Anubhav"
console.log("output from file b",transfer_by_b)