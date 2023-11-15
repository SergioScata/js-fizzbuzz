//Creiamo un programma che stampa i numeri da 1 a 100

for (let i = 1;i < 101;i++) {
    

    if (i % 15 == 0){
        console.log("Fizzbuzz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else if (i % 3 ==0) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
};