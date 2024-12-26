var menu = document.getElementById("menu");

function showMenu(){
    menu.style.right ="0";
}

function hideMenu(){
    menu.style.right ="-200px";
}



let scrollContainer = document.querySelector(".promote-list");
let backBtn = document.getElementById("backBtn");
let nextkBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt)=> {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextkBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft += 400;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft -= 400;
});
