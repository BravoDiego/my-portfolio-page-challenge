var btnOne = document.querySelector("#un");
var btnTwo = document.querySelector("#deux");
var chevronLeft = document.querySelector("#chevronleft");
var chevronRigth = document.querySelector("#chevronrigth");

var pageOne = document.querySelector("main");
var projectsOne = document.querySelector("#projects");
var projectsTwo = document.querySelector("#projectstwo");

var pageActuel = 1;

btnOne.addEventListener("click", function() {
    pageActuel = 1;
    Switch();
});
btnTwo.addEventListener("click", function() {
    pageActuel = 2;
    Switch();
});
chevronLeft.addEventListener("click", function() {
    pageActuel = 1;
    Switch();
});
chevronRigth.addEventListener("click", function() {
    pageActuel = 2;
    Switch();
});

function Switch() {
    if (pageActuel === 1) {
        pageOne.style.display = 'grid';
        projectsOne.style.display = 'grid';
        projectsTwo.style.display = 'none';
        btnOne.classList.add("active");
        btnTwo.classList.remove("active");
    } else {
        pageOne.style.display = 'none';
        projectsOne.style.display = 'none';
        projectsTwo.style.display = 'grid';
        btnTwo.classList.add("active");
        btnOne.classList.remove("active");
    }
}