<<<<<<< HEAD
document.getElementById("hamburger").addEventListener("click", function () {
   const nav = document.querySelector(".main-nav");
   nav.style.display = nav.style.display === "flex" ? "none" : "flex";
 });

 // Optional JS for collapsible sections (advanced UX)
document.querySelectorAll('.about-block h3').forEach(header => {
   header.addEventListener('click', () => {
     const content = header.nextElementSibling;
     content.style.display = content.style.display === 'none' ? 'block' : 'none';
   });
 });
=======
document.getElementById("hamburger").addEventListener("click", function () {
   const nav = document.querySelector(".main-nav");
   nav.style.display = nav.style.display === "flex" ? "none" : "flex";
 });

 // Optional JS for collapsible sections (advanced UX)
document.querySelectorAll('.about-block h3').forEach(header => {
   header.addEventListener('click', () => {
     const content = header.nextElementSibling;
     content.style.display = content.style.display === 'none' ? 'block' : 'none';
   });
 });
>>>>>>> 383c880784373a550aa9b35320c2b362375ddada
 