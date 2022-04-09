// set up a button and change background pink
window.onload = () =>{
    const button = document.createElement('button');
    button.id ="PinkButton";button.textContent ="Pink";
    document.querySelector('#end').prepend(button);
    button.addEventListener('click',() => ChangePink());
    
}

function ChangePink(){
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor ="Pink";
}


































