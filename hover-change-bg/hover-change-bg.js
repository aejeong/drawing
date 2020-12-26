function changeBackground(e){
var targetElement = e.target.parentNode.getAttribute('data-img');
document.querySelector('.photo').style.background = 'url('+targetElement+')no-repeat center center';
document.querySelector('.photo').style.backgroundSize = 'cover'
}