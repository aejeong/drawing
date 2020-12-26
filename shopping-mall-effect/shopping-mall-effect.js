var sizes =document.querySelectorAll('.size span');
var colors = document.querySelectorAll('.color span');
function options(e){
    var targetEle =e.target;
    sizes.forEach(size=> size.classList.remove('active'))
    targetEle.classList.add('active');
}

function colorOptions(e){
    var targetEle =e.target;
    colors.forEach(color=> color.classList.remove('active'))
    targetEle.classList.add('active');
}

var likeButton = document.querySelector('.like');
likeButton.addEventListener('click',function(){
    likeButton.classList.toggle('active');
})