
//EXERCISE 1
/*

let hashtags = "#";
for (let i = 1; i <= 7; i++) {
    console.log(hashtags);
    hashtags+= `#`;
}

*/
/*

//EXERCISE 2

for (let x = 1; x < 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz")
    } else if (x % 3 === 0) {
        console.log("Fizz");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(x);
    }
}

*/

//EXERCISE 3

/*

let size = 8;
let hashtags =``;
let hashtags2 =``;
if (size % 2 === 0) {
    for (let i = (size / 2); i > 0; i--) {
        hashtags+= `# `;
    }
    for (let f = (size / 2); f > 0; f--) {
        hashtags2+= ` #`;
    }
} else {
    for (let i = (size / 2); i > 0; i--) {
        hashtags+= `# `;
    }
    size--
    for (let f = (size / 2); f > 0; f--) {
        hashtags2+= ` #`;
    }
}
for (let h = (size / 2); h > 0; h--) {
console.log(`${hashtags}`);
console.log(`${hashtags2}`)
}

*/
/*

//EXERCISE 4 (Ascending)

for (let a = 1; a <= 50; a++) {
    console.log(a);
}

for (let b = 1; b <= 25; b++) {
    console.log(b);
}

for (let c = 1; c <= 25; c++) {
    console.log(c)
    c++
}

for (let d = 1; d <= 25; d++) {
    if (d % 3 === 0) {
        console.log(d);
    }
}

for (let e = 1; e <= 10; e++) {
    console.log(`${e*5}`);
}

for (let f = 1; f<= 50; f++) {
    if (f % 2 === 0 && f % 3 === 0) {
        console.log("");
    } else if (f % 2 === 0) {
        console.log(f);
    } else if (f % 3 === 0) {
        console.log(f);
    } else {
        console.log("");
    }
}

for (let g = 1; g <= 100; g++) {
    if (g % 12 === 0) {
        console.log("");
    } else if (g % 2 === 0 && g % 3 === 0) {
        console.log(g);
    } else {
        console.log("")
    }
}

*/

/*

//EXERCISE 5 (Descending)

for (let a = 50; a >= 1; a--) {
    console.log(a);
}

for (let b = 25; b >= 1; b--) {
    console.log(b);
}

for (let c = 25; c >= 1; c--) {
    console.log(c)
    c--
}

for (let d = 25; d >= 1; d--) {
    if (d % 3 === 0) {
        console.log(d);
    }
}

for (let e = 10; e >= 1; e--) {
    console.log(`${e*5}`);
}

for (let f = 50; f>= 1; f--) {
    if (f % 2 === 0 && f % 3 === 0) {
        console.log("");
    } else if (f % 2 === 0) {
        console.log(f);
    } else if (f % 3 === 0) {
        console.log(f);
    } else {
        console.log("");
    }
}

for (let g = 100; g >= 1; g--) {
    if (g % 12 === 0) {
        console.log("");
    } else if (g % 2 === 0 && g % 3 === 0) {
        console.log(g);
    } else {
        console.log("")
    }
}

*/

/*

//EXERCISE 6 (3)

let ten = 1;
for (let i = 1; i < 11; i++) {
    console.log(`3*${ten} = ${3*ten}`);
    ten++
}

//EXERCISE 6 (17)

let tenn = 1;
for (let x = 1; x < 11; x++) {
    console.log(`17*${tenn} = ${17*tenn}`);
    tenn++
}

*/


//EXERCISE 7 (Calculator)

const prompt = require('prompt-sync')();

console.log("Please select an option - \nPress 1 to add \nPress 2 to subtract \nPress 3 to multiply \nPress 4 to divide \nPress 5 to quit\n");

let selection =Number(prompt(" "))

if (selection === 5) {
    console.log("Come back soon");
} else {
    let num1 = Number(prompt("Enter First Number: "));
    let num2 = Number(prompt("Enter Second Number: "));

    if (selection === 1) {
        console.log(num1 + num2);
    } else if (selection === 2) {
        console.log(num1 - num2);
    } else if (selection === 3) {
        console.log(num1 * num2);
    } else if (selection === 4) {
        console.log(num1 / num2);
    } else {
        console.log("Invalid selection");
    }
}
