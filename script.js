const textBox = document.getElementById('textBox');
const output = document.getElementById('outputBox');
const countLength = document.getElementById('countLength');
const Trim = document.getElementById('Trim');
const ToUpperCase1 = document.getElementById('ToUpperCase');
const ToLowerCase1 = document.getElementById('ToLowerCase');
const countWord1 = document.getElementById('CountWord');


// Count Lenght

function countLengths(){
    let text = textBox.value;
    output.innerText = text.length;
};

// Trim method 
function trims(){
    let text = textBox.value.trim();
    output.innerText = text;
};
// To Upper Case
function ToUpperCase(){
    let text = textBox.value.toUpperCase();
    output.innerText = text;
};

// To Lower Case
function ToLowerCase(){
    let text = textBox.value.toLowerCase();
    output.innerText = text;
};

// Count words
function CountWord(){
    let text = textBox.value.trim();

    if(text === ""){
        output.innerText = "Total Words: 0"
        return ;
    }

    let words = text.split(" ")
    output.innerText = words.length;
};
 
// Add EventListener
countLength.addEventListener("click",countLengths);
Trim.addEventListener("click",trims);
ToUpperCase1.addEventListener("click",ToUpperCase);
ToLowerCase1.addEventListener("click",ToLowerCase);
countWord1.addEventListener("click",CountWord);