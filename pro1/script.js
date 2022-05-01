let navbarv=document.querySelector(".navation")
document.querySelector("#menu-btn").onclick=()=>{
navbarv.classList.toggle("active");
cartitem.classList.remove("active");
searchitem.classList.remove("active"); 
}
let cartitem=document.querySelector(".cart-items-container")
document.querySelector("#cart-btn").onclick=()=>{
cartitem.classList.toggle("active");
navbarv.classList.remove("active");
searchitem.classList.remove("active"); 
}
let searchitem=document.querySelector(".search-form")
document.querySelector("#search-btn").onclick=()=>{
searchitem.classList.toggle("active");
navbarv.classList.remove("active");
cartitem.classList.remove("active");
}
window.onscroll=()=>{
    navbarv.classList.remove("active");
    cartitem.classList.remove("active");
    searchitem.classList.remove("active"); 
}