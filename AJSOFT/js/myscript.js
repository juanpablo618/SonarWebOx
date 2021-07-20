const ipad =  window.matchMedia('screen and (max-width:768px)');
const menu = document.querySelector('.menu');
const burgerbutton = document.querySelector('#burger');
const xbutton = document.querySelector('#x');
var estado = false;
ipad.addListener(validation);



function validation(ipad){

  if(ipad.matches == true){
    burgerbutton.addEventListener('click',hideShow);
    xbutton.addEventListener('click',hideShow);

  }else {
    burgerbutton.removeEventListener('click',hideShow);
    xbutton.removeEventListener('click',hideShow);
  }
}
validation(ipad);


function hideShow(){
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active');

  }else{
    menu.classList.add('is-active');
  }
}
