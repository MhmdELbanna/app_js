let generate__btn=document.querySelector(".generate__btn button");
let random_input=document.querySelector(".random_input input");
let copy=document.querySelector(".random_input i");
let clipboard=document.querySelector(".gr h3")
let char_A="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let char_small="abcdefghijklmnopqrstuvwxyz";
let special_char="!@#$%^&*)(\"~`., ;:{}[]|'()_-+=//\\";
let numbers="0123456789";

let char_All=char_A+char_small+special_char+numbers;

let length_pass=8;

generate__btn.addEventListener("click",()=>{
    let password="";
    while (length_pass > password.length) {
        password += char_All[Math.floor(Math.random() * char_All.length)];
    }
    random_input.value=password;
});

copy.addEventListener("click",()=>{
let value_pass=random_input.value;
random_input.select();
navigator.clipboard.writeText(value_pass);
setTimeout(() => {
    clipboard.style.top= "30px";
    setTimeout(() => {
        clipboard.style.top= "-30px";
    }, 2500);
});
});





/*password +=char_A[Math.floor(Math.random()*char_A.length)];
password +=char_small[Math.floor(Math.random()*char_small.length)];
password +=special_char[Math.floor(Math.random()*special_char.length)];
password +=numbers[Math.floor(Math.random()*numbers.length)];*/