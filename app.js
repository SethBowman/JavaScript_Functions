console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let result = function printOdds() 
{
    for(let i = 1; i <= 100; i++) 
    {
        if(i % 2 != 0) 
        {
            console.log(i);
        }        
    }
}

result();

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let uName = prompt("Please enter your name.");

alert(`Hello ${uName}.`)

let age = prompt("Please enter your age");

function checkAge(uName = "John", age = 20) 
{
    const difference = age - 16;

    if(age > 16) 
    {
        alert(`"Congrats ${uName}, you have been able to drive for ${difference} years."`)
    }
    else if(age == 16) 
    {
        alert(`Congrats ${uName}, you started driving this year!`)
    }
    else 
    {
        alert(`"Sorry ${uName}, but you need to wait until you're 16."`);
    }    
}

checkAge(uName, age);


// function addedAndSquared(num1, num2) 
// {
//     let sum = num1 + num2;
//     let squared = sum ** 2;
//     console.log(squared);
// }


// let userNum1 = prompt("Enter first number.");
// let userNum2 = prompt("Enter second number");

// addedAndSquared(userNum1, userNum2);