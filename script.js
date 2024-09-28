//Img switching when clicking
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

//Navigation bar close button
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


//Navigation bar close button
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//Img switching when clicking
smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
}
