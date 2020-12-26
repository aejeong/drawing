var titles = document.querySelectorAll('.title');
var imgContainer = document.querySelector('.image img');
console.dir(imgContainer,'---titles')
for(var i =0; i<titles.length;i++){
    titles[i].addEventListener('click',function(e){
        var img = e.target.getAttribute('data-img');

        titles.forEach(function(title){
            title.classList.remove('active')
            title.nextElementSibling.classList.remove('active')
        })
        e.target.classList.add('active');
        e.target.nextElementSibling.classList.add('active');
        imgContainer.src = img;
        
    })
}