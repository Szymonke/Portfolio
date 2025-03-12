let number = 2
let string = "Hello"
let bool = true

console.log("If + variables")
console.log("--------------------")

if(bool) {
    console.log(number + ", " + string)
}

console.log("--------------------")
console.log("Recurrency function + if + incrementation")
console.log("--------------------")

function recurrent(obj){
    console.log(obj)
    obj++
    if (obj<=10){
        recurrent(obj)
    } else{
        console.log("Number too high!")
    }
}
recurrent(number)

console.log("--------------------")
console.log("Loops")
console.log("--------------------")

do{
    console.log(number)
    number++
}while(number<=10)

console.log("Number too high!")

number = 2

while(number<=10){
    console.log(number)
    number++
}

console.log("Number too high!")

number = 2

for(number; number<=10; number++){
    console.log(number)
}

console.log("Number too high!")