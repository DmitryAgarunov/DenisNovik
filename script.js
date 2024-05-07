let burger=document.querySelector(".burger")
let menu=document.querySelector(".mobile__menu")
let close=document.querySelector(".close")
let navigationLi=document.querySelectorAll(".navigation__a")

burger.addEventListener("click", function(){
    menu.style="left: 0%"
})

close.addEventListener("click", function(){
    menu.style="left: 100%"
})

navigationLi.forEach(el=>el.addEventListener("click", function(){
    menu.style="left: 100%"
}))
