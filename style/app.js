var back = document.getElementById('back');
var next = document.getElementById('next');
var un = document.getElementById('un');
var deux = document.getElementById('deux');

var main = document.querySelector('main');
var page2 = document.querySelector('#projects2');

var page = 1;

back.addEventListener("click", PageOne);
next.addEventListener("click", PageTwo);
un.addEventListener("click", PageOne);
deux.addEventListener("click", PageTwo);

function PageTwo() {
    console.log(deux);
    page = 2;
    main.style.display = 'none';
    page2.style.display = 'flex';
    un.style.backgroundColor = '#F2F2F2';
    un.style.color = '#2acd73';
    deux.style.backgroundColor = '#2acd73';
    deux.style.color = '#F2F2F2';    
}

function PageOne() {
    page=1;
    main.style.display = 'flex';
    page2.style.display = 'none';
    deux.style.backgroundColor = '#F2F2F2';
    deux.style.color = '#2acd73';
    un.style.backgroundColor = '#2acd73';
    un.style.color = '#F2F2F2';    
}