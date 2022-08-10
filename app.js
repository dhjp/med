


//=======================BUTTON CLAER=======================================
$(document).ready(function(){
  $('#Insbtn').click(function(){
   $('.clear').val('');
  });
 }); 

 $(document).ready(function(){
  $('#Clebtn' ).click(function(){
    $('.Clear_find').val('');
  });
 });

 $(document).ready(function(){
  $('#Clebtn' ).click(function(){
    $('.Clear_find_02').val('');
  });
 });

//=======================BUTTON CLAER=======================================

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

//=======================BUTTON HIND=======================================
function show(){
  document.getElementById('cont').style.display="block"
  document.getElementById('Delbtn').style.display="inline"
  document.getElementById('Updbtn',).style.display="inline"
  document.getElementById('Clebtn',).style.display="inline"  
  }
