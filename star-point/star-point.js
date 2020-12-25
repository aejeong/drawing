var stars = document.querySelectorAll('.stars .fa') 
var print = document.querySelector('.print');

function addStars(e){
    var targetStar = e.target;
    var starRate = 0;
    stars.forEach(function(star){star.classList.remove('active')});
    targetStar.classList.add('active');
    colorPreviousStar(targetStar)
    stars.forEach(function(star){
        if(star.classList.contains('active')){
            starRate++;
        }
    });

    
    switch(starRate){
        case 1: 
        return print.innerHTML = '<img src="images/star-lv1.png">'+'별로에요';
        case 2:
        return print.innerHTML = '<img src="images/star-lv2.png">' + '그냥 그래요';
        case 3:
            return print.innerHTML = '<img src="images/star-lv3.png">'+'보통 이에요';
        case 4:
            return print.innerHTML = '<img src="images/star-lv4.png">'+'마음에 들어요';
        case 5:
            return print.innerHTML ='<img src="images/star-lv5.png">'+'아주 좋아요'
    }    

}

function colorPreviousStar(target){
if(!target.previousElementSibling){
    return;
}
target.previousElementSibling.classList.add('active');
colorPreviousStar(target.previousElementSibling)
}