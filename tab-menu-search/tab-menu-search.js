var buttonLists = document.querySelector('.btn').children;
function activeTab(e){
    var targetElement = e.target;
    if(targetElement.classList.contains('active')){
        return;
    }
    for(var i=0;i<buttonLists.length;i++){
        buttonLists[i].classList.remove('active');
    }
    targetElement.classList.add('active');
    var tab = targetElement.getAttribute('data-attr');
    var tabId = document.getElementById(tab);
    var tabs = document.querySelector('.tabs').children;
    for(var i=0;i<tabs.length;i++){
        tabs[i].classList.remove('active')
    }
    tabId.classList.add('active');
}