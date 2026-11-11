// Use to avoid certain errors, reference slide: lab assignment instructions
"use strict";

// Student Table, reference slide: 45 - Chapter 4 (JavaScript Part 1)
const Student = [
    {
        id: 1,
        name: 'Etudiant1',
    },
    {
        id: 2,
        name: 'Etudiant2',
    },
    {
        id: 3,
        name: 'Etudiant3',
    }
];

// Student Object Declaration, reference slide: 40 - Chapter 4 (JavaScript Part 1)
const student ={
    nom : 'John',
    prenom : 'DOE',
    age : 30,
}

// Student Table, reference slide: 45 - Chapter 4 (JavaScript Part 1)
const Student2 = [
    {
        id: 1,
        name: 'nom1',
        prenom: 'prenom1',
        num: 21,
    },
    {
        id: 2,
        name: 'nom2',
        prenom: 'prenom2',
        num: 22,
    },
    {
        id: 3,
        name: 'nom3',
        prenom: 'prenom3',
        num: 23,
    }
];


// Behavior to execute when the click event is triggered, reference slide: 15 - Chapter 4 (JavaScript Part 1)
// For Loop
function F1() {
    // Display the Student Table, reference slide: 45 - Chapter 4 (JavaScript Part 1)
    for(let i=0; i<=2; i++){
        console.log(Student[i].name);  
    }  
}
function F2() {
    // Display the Student Object, reference slide: 40 - Chapter 4 (JavaScript Part 1)
    console.log(student);    
}
function F3() {
    // Display the Student2 Table, reference slide: 45 - Chapter 4 (JavaScript Part 1)
    for(let i=0; i<=2; i++){
        console.log(Student2[i].name + "-" + Student2[i].prenom + "-" + Student2[i].num);  
    }     
}