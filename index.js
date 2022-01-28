function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result = result * i;
    }
}

console.log(factorial(5));

console.log("hello")

let index = 0;

if (index != 0) {
    console.log("index is not zero");
}

let obj = {
    one: "1",
    two: "2",
}

function isLessThanFive(n) {
    console.log("Yam maru oiba message");
    if (n < 5) {
        return true;
    }
    return false;
}

let factorialOfFive = factorial(5)

let x = true;

let y = true;

console.log(x && isLessThanFive(6))


let isUserSignedIn = false;
isUserSignedIn && console.log("Logout Button");

if (isUserSignedIn) {
    console.log("Logout Button")
}






