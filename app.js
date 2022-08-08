const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e=>{
  textarea.style.height = "100px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//=======================CLEAR=======================================
let btnclaer = document.querySelector('Submit');
let inputs = document.querySelectorAll('input');

btnclaer.addEventListener('click',()=>{
  inputs.forEach(input => input.value = '');
});