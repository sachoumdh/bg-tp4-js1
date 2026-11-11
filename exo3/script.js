// Use to avoid certain errors, reference slide: lab assignment instructions
"use strict";

// Student Table, reference slide: 45 - Chapter 4 (JavaScript Part 1)
const Students = [
    {
        id: 1,
        mat: 1000, // student id 
        name: 'JOHN', // student name
        prenom: 'DOE', // student last name
        moyenne: 14, // student average 
        num: 5, // information
    },
    {
        id: 1,
        mat: 2000, // student id 
        name: 'BOB', // student name
        prenom: 'CARLTON', // student last name
        moyenne: 7, // student average 
        num: 1, // information
    },
    {
        id: 1,
        mat: 3000, // student id 
        name: 'RAYANE', // student name
        prenom: 'SMITH', // student last name
        moyenne: 13, // student average 
        num: 3, // information
    }
];


// Behavior to execute when the click event is triggered, reference slide: 15 - Chapter 4 (JavaScript Part 1)
// For Loop
function A() {
    // Display the Student Table, reference slide: 45 - Chapter 4 (JavaScript Part 1)
    for(let i=0; i<=2; i++){
        // Local Variable used to verify if average is grater or equal to 10, reference slide: 51 - Chapter 4 (JavaScript Part 1) 
        let average = Students[i].moyenne;

        // If Else Conditions, reference slide: 40 - Chapter 4 (JavaScript Part 1)
        if (B(average) == true)
            console.log(Students[i].mat + " : ADMIS" );  
        else 
            console.log(Students[i].mat + " : AJOURNE" ); 
    }  
}

function B(average) {
    // If Else Conditions, reference slide: 40 - Chapter 4 (JavaScript Part 1) 
    if (average >= 10) 
        return true; // student admis
    else 
        return false; // student ajourne
}