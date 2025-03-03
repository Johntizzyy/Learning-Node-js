console.log(global)

global.setTimeout(() => {
    console.log('Hello world')
},3000)

setTimeout(() => {
    console.log('Node Timeout')
    clearInterval(int)
},5000)

const int = setInterval(() => {
    console.log("Node interval")
},1000)

console.log(__dirname)
console.log(__filename)