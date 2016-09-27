/*
PRIMITIVE DATA TYPES
--------------------
JavaScript SNNUBS values:
- String
- Number
- Null
- Undefined
- Boolean
- Symbol

Any expression in JS will return a value (e.g. 2+2 returns 4), and that value 
will have a TYPE. A value's TYPE, tells us what kind of "thing" it is.

typeof(10 < 2);

Null means a value does not exist.

typeof(a + b);
> Uncaught ReferenceError: a is not defined(…)

VARIABLES
---------
var randomNumber = Math.random() * 5;
alert(randomNumber);



FizzBuzz is a common coding exercise that is well known
as a coding question asked in interviews that is designed
to filter out candidates.

Let's try a modified version of FizzBuzz with if/else and
see if we can do it:

Generate a random number btwn 0 and 5. If the result is
divisible by 3 alert "fizz". If the # is divisible by
5, alert "buzz", otherwise print the number to the console.

var randomNumber = Math.round( Math.random() *5 );

if(randomNumber%3 === 0){
    alert("fizz");
}
else if(randomNumber%5 === 0) {
    alert("buzz");
}
else {
    console.log(randomNumber);
}


---

function foo() {
    var randomNumber = Math.round( Math.random() *5 );
    
    if(randomNumber%3 === 0){
        console.warn("fizz");
    }
    else if(randomNumber%5 === 0) {
        console.warn("buzz");
    }
    else {
        console.log(randomNumber);
    }   
}

for(i=0;i<=100;i++) {
    console.log(foo());
}

---

function foo() {
    var randomNumber = Math.round( Math.random() * 15 );
    // var randomNumber = 0; 
    
    if(randomNumber%3 === 0 && randomNumber !=0){
        console.info("fizz");
    }
    else if(randomNumber%5 === 0 && randomNumber !=0) {
        console.warn("buzz");
    }
    else if(randomNumber%3 === 0 && randomNumber%5 === 0) {
        console.error("fizzbuzz");
    }
    else {
        console.log(randomNumber);
    }   
    
}

for(i=0;i<=100;i++) {
    console.log(foo());
}

---

function foo() {
    var randomNumber = Math.round( Math.random() * 15 );
    // var randomNumber = 0; 
    
    if(randomNumber%3 === 0 && randomNumber !=0){
        console.info("fizz");
    }
    else if(randomNumber%5 === 0 && randomNumber !=0) {
        console.warn("buzz");
    }
    else if(randomNumber%3 === 0 && randomNumber%5 === 0) {
        console.error("fizzbuzz");
    }
    else {
        console.log(randomNumber);
    }  
    
    if(randomNumber%3 === 0 && randomNumber != 0){
        if(randomNumber%5 === 0){
            console.error("fizzbuzz");
        }
        else {
            console.info("fizz");
        }
    }
    
}

for(i=0;i<=100;i++) {
    console.log(foo());
}

---

function foo() {
    var randomNumber = Math.round( Math.random() * 100 );
    
    if(randomNumber%3 === 0 && randomNumber !=0){
        if(randomNumber%5 === 0){
            console.warn("fizzbuzz");
        }
        else {
            console.info("fizz");
        }
    }
    else if(randomNumber%5 === 0 && randomNumber !=0) {
        console.warn("buzz");
    }
    else {
        console.error(randomNumber);
    }
}

for(i=0;i<=100;i++) {
    console.log(foo());
}



Related: 20 ways to fizzbuzz
http://ditam.github.io/posts/fizzbuzz/
https://www.reddit.com/r/javascript/comments/2yhg1c/whats_the_best_fizzbuzz_solution/?st=itlajdzx&sh=a27d1597




*/