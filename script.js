// show menu
/*const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click',() =>{
            nav.classList.toggle('active')
        });
    }
}
showMenu("nav_toggle","nav_menu")*/

let toggle = document.querySelector(".nav_toggle");
let nav = document.querySelector(".nav_menu");

toggle.addEventListener('click', function() {
    nav.classList.toggle("active");
});
 

