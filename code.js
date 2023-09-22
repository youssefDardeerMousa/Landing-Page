let nav=document.querySelector("#nav");
let navlinks=document.querySelectorAll(".nav-link");
let navbarSupportedContent=document.querySelector("#navbarSupportedContent");
document.addEventListener("scroll",()=>{
    if(window.scrollY>=560){
        nav.style.backgroundColor="#362B2B";
       
    }
    else{
        nav.style.backgroundColor=""
    }
})
let isTrue=true;
for(var i=0;i<navlinks.length;i++){
   navlinks[i].addEventListener("click",()=>{
    
    navbarSupportedContent.className="collapse navbar-collapse hiding"
   })

   
}

document.addEventListener("click",()=>{
    
    navbarSupportedContent.className="collapse navbar-collapse hiding"
   })