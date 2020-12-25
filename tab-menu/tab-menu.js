(function toggleImgEvent(){
    var testmonialImages = document.querySelectorAll('.testmonial-pic img');
    var content = document.querySelectorAll('.testmonial .content');
    testmonialImages.forEach(function(img,idx){
        img.addEventListener('click',function(){
        testmonialImages.forEach(node=> node.classList.remove('active'));
        content.forEach(node=> node.classList.remove('active'));
        img.classList.add('active');
        content[idx].classList.add('active');
        
    })
    })
})()

// function removeClassAttr(){
//     for(var i=0;i<arguments.length;i++){
//         for(var j=0;j<arguments[i].length;j++){
//             arguments[i][j].classList.remove('active');
//         }
//     }
// }