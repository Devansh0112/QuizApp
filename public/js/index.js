const leftSide = document.getElementById('leftSide');
const rightSide = document.getElementById('rightSide');
const content = document.getElementById('content');

leftSide.addEventListener('mouseenter', function(){
    leftSide.style.width = '70%';
    rightSide.style.width = '30%';
    rightSide.style.left = '70%';
});

rightSide.addEventListener('mouseenter', function(){
    rightSide.style.width = '70%';
    leftSide.style.width = '30%';
    rightSide.style.left = '30%';
});

content.addEventListener('mouseleave', function(){
    rightSide.style.width = '50%';
    leftSide.style.width = '50%';
    rightSide.style.left = '50%';
});