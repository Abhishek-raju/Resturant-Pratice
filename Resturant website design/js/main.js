//Active Navbar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
//Nav Hide

let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-Collapse").forEach((a)=>{
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    });
});

//Counter Design

document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end > start ? 1 : -1,
        step =Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            obj.textContent=`${current += increment} +`;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,500,800);
    counter("count2",0,800,800);
    counter("count3",0,790,800);
    counter("count4",0,450,800);
});