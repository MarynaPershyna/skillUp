// console.log(document.documentElement);
// console.log(document.body)
// console.log(document.body.children);

// for (let i = 0; i < document.body.children.length; i++) {
//     console.log(document.body.children);
    
// }

// for (let item of document.body.children) {
//     console.log(item)
// }


// ========================

// console.log(document.body.children[1]);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.parentElement)

// ===============

// console.log(document.body.parentElement)

// ======

// // пошук
// console.log(document.body.lastElementChild.previousElementSibling.previousElementSibling.lastElementChild.previousElementSibling)

// ========


let title = document.getElementById("title");
console.log(title);
// let text = document.getElementsByClassName("text");
// console.log(text);

// let li = document.getElementsByTagName("li");
// console.log(li);

// ========
let text = document.querySelector(".text");
console.log(text);

let li = document.querySelectorAll("li");
console.log(li);

