const openbtn = document.querySelector(".menu-icon");
const closebtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");
const link = document.querySelectorAll(".link")

openbtn.addEventListener("click", function(e){
    e.preventDefault();
    nav.classList.toggle("block")
})
closebtn.addEventListener("click", function(e) {
    e.preventDefault();
    nav.classList.toggle("block")
})
link.forEach(e => {
    e.addEventListener('click', function() {
        nav.classList.remove('block')
    })
});