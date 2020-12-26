var trigger = document.querySelector('.trigger');
var modal = document.querySelector('.modal-gnb');
trigger.onclick = function(){
    trigger.classList.toggle('active');
    modal.classList.toggle('active');
}

var audio = document.getElementById('audio');
audio.volume = 0.2;