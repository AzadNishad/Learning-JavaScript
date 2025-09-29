// Write an if statement that checks if a variable age is greater than or equal to 18. If true,
// log "You are an adult." to the console; otherwise, log "You are a minor."

let age = 6

if (age >= 18) {
    // console.log("You are adult")
} else {
    // console.log("You are minor")
}

/*Create a function isPositive that takes a number as input and returns "Positive" 
 if the number is greater than 0, and "Non-positive" otherwise. Use an if statement
 inside the function to implement this logic. */

function isPositive(no) {
    if (no >= 0) {
        console.log("Number is Positive")
    } else {
        console.log("Number is Nagative")
    }
}

//  isPositive(-54)

/* Write a program that checks if a given number num is even. If true, log
  "The number is even." to the console; otherwise, log "The number is odd." */

function isOdd(no) {
    if (no % 2 == 0) {
        console.log("Number is EVEN")
    } else {
        console.log("Number is ODD")
    }
}

//    isOdd(66)

/* Create a function greetTimeOfDay that takes an argument hour representing the current hour of the day (in 24-hour format).
   Using if statements, implement the following logic:

If hour is less than 12, log "Good morning!".
If hour is between 12 and 18 (inclusive), log "Good afternoon!".
Otherwise, log "Good evening!". */

function greetTimeOfDay(hour) {
    if (hour < 12) {
        console.log("Good Morning")
    } else if (12 >= hour && hour <= 18) {
        console.log("Good Afternoon")
    } else {
        console.log("Good Evening")
    }
}

// greetTimeOfDay(23)

/* Write a program that checks if a person is eligible to vote based on their age.
If the person's age is 18 or older, log "You are eligible to vote."; otherwise, 
log "You are not eligible to vote yet." */

age = 55

if (age >= 18) {
    // console.log("You are eligible to vote.")
} else {
    // console.log("You are not eligible to vote yet.")
}

/* Create a function isLeapYear that takes a year as input and returns true if it's a 
leap year and false otherwise. A leap year is divisible by 4, but not divisible by 100 
unless it is also divisible by 400. Use if statements to implement this logic. */

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

//   console.log(isLeapYear(2027))

/* Write a program that determines whether a given year is a leap year. If it is, log 
"The year is a leap year."; otherwise, log "The year is not a leap year." */

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("The year is a leap year.")
    } else {
        console.log("The year is not a leap year.")
    }
}

//   leapYear(2064)

/* Create a function calculateGrade that takes a numerical score as input and returns the corresponding letter grade according to the following grading scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: Below 60
Use if statements to implement this logic. */

function calculateGrade(grade) {
    if (grade >= 90 && grade <= 100) {
        console.log("A Greade")
    } else if (grade >= 80 && grade <= 89) {
        console.log("B Greade")
    } else if (grade >= 70 && grade <= 79) {
        console.log("C Greade")
    } else if (grade >= 60 && grade <= 69) {
        console.log("D Greade")
    } else if (grade >= 35 && grade <= 59) {
        console.log("F Greade")
    } else {
        console.log("~~ FAIL ~~")
    }
}

// calculateGrade(84)

// Write a program that determines if a given year year is a leap year and if the
//  month has 30 days or 31 days. Log the result to the console.

function checkYearAndMonth(year, month) {
    let leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

    let daysInMonth
    if (month === 2) {
        daysInMonth = leapYear ? 29 : 28
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30
    } else {
        daysInMonth = 31
    }

    if (leapYear) { 
        console.log(year + " is leap year")
    } else {
        console.log(year + " is not leap year")
    }

    console.log(month + " month has " + daysInMonth + " days")
}

checkYearAndMonth(2210,6)