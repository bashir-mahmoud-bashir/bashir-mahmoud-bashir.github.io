document.body.classList.add( localStorage.getItem("pagecolor"));
var el=document.querySelectorAll('.swtich-color li');
var classlest=[];
for(var i=0;i<el.length;i++)
{
    classlest.push(el[i].getAttribute("data-color"));
    el[i].addEventListener("click",function(){
        document.body.classList.remove(...classlest);
      
        document.body.classList.add(this.getAttribute("data-color")); 
        localStorage.setItem("pagecolor",this.getAttribute("data-color"));
    } ,false);
}
////////////////////
let stylesweter=document.querySelector(".ilk");
stylesweter.addEventListener("click",()=>{
    document.querySelector(".oip").classList.toggle("open")
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".oip").classList.contains("open")){
        document.querySelector(".oip").classList.remove("open"); 
    }
})
let navbar = document.querySelector('.menu ul ');

document.querySelector('.cal').onclick = () =>{
    navbar.classList.toggle('active');}
    window.onscroll = () =>{
        navbar.classList.remove('active');}