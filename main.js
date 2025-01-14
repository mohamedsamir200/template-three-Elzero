let links = document.querySelector("#links"); 
let megaMenu = document.querySelector(".mega-menu"); 

links.addEventListener("mouseover", () => {
  megaMenu.style.opacity = "1"; 
});

links.addEventListener("mouseout", () => {
  megaMenu.style.opacity = "0"; 
});
