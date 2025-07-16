const openSideBar = document.querySelector("#open-sidebar");
const sideBar = document.querySelector("#nav-sidebar");
const closeSideBar = document.querySelector("#close-sidebar");


openSideBar.addEventListener("click",function(){
    sideBar.style.visibility = "visible";
});

closeSideBar.addEventListener("click",function(){
    sideBar.style.visibility = "hidden";
});

document.addEventListener("click",function(){
if(
    !event.composedPath().includes(sideBar) &&
    !event.composedPath().includes(openSideBar) 
){
    sideBar.style.visibility = "hidden";
}
});