var loginButton =document.querySelector('.login button');

loginButton.onclick = function(){
var age =  document.getElementById('age').value;
console.log(typeof age)
if(age == ''){
    alert('Please enter your age')
}else if(age < 20){
    alert('You are not allowed');
}else if(age >= 20){
    alert('You are welcom to join us');
}else{
    alert('Please enter your age in number')
}
}