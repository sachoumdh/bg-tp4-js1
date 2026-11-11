// Use to avoid certain errors, reference slide: lab assignment instructions
"use strict";

// Constants declaration, reference slide: 38 - Chapter 4 (JavaScript Part 1)
// I declared the variables as constants because removing the "const" keyword causes an issue in the console when clicking
const nom = "John";
const prenom = "Doe";
const age = 30;
const note = 15;
const pi = 3.14;

// Behavior to execute when the click event is triggered, reference slide: 15 - Chapter 4 (JavaScript Part 1)
function F1() {
    // Display the text, reference slide: 34 - Chapter 4 (JavaScript Part 1)
    console.log(nom);    
}
function F2() {
    // Display the text, reference slide: 34 - Chapter 4 (JavaScript Part 1)
    console.log(prenom);    
}
function F3() {
    // Display the text, reference slide: 34 - Chapter 4 (JavaScript Part 1)
    console.log(nom + "-" + prenom);    
}
function F4() {
    // Display the text, reference slide: 34 - Chapter 4 (JavaScript Part 1)
    console.log(age);    
}
function F5() {
    // Display the text, reference slide: 34 - Chapter 4 (JavaScript Part 1)
    console.log(note);    
}
function F6() {
    // Display the text, reference slide: 34 - Chapter 4 (JavaScript Part 1)
    console.log(pi);    
}