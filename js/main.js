let mainBar = document.getElementById("main-bar");
let icon = document.getElementById("icon");
let openIcon = document.getElementById("open-icon");
let closeIcon = document.getElementById("close-icon");

    mainBar.addEventListener("click", function(){
    mainBar.classList.toggle("active");
    openIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
})