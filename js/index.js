
// GLOBAL VARIABLE
const menuBtn=document.querySelector("#menuBtn");
const mobileMenu=document.querySelector("#mobileMenu")
const bodyDiv=document.querySelector("#bodyDiv")
const menuLink =document.querySelectorAll(".menuLink")
console.log(menuLink)
// END GLOBAL VARIABLE

// START CONTROL MENU ON MOBILE
for(let menuLinks of menuLink){
    menuLinks.onclick=()=>{
        if(!mobileMenu.classList.contains("hidden")){
            mobileMenu.classList.add("hidden")
        }
    }
}
menuBtn.onclick=()=>{
    const isHidden=mobileMenu.classList.contains("hidden");
    if(isHidden){
        mobileMenu.classList.remove("hidden")
    }
    else{
        mobileMenu.classList.add("hidden")
    }
}
// END CONTROL MENU ON MOBILE

import routes from "./module.js"
import { NotFound } from "../pages/notfound.js";
const handleRouteChange=()=>{
      const location1=window.location.hash.replace("#","") || "/";
      bodyDiv.innerHTML=routes[location1] || NotFound
}
handleRouteChange()
window.onhashchange=()=>{
    handleRouteChange()
}
// END ROUTE CODING