//toggle 
const act = document.querySelector('.menu-nav');

//funct
document.querySelector('#list').onclick = () =>{
    act.classList.toggle('activated');
}

//remove MouseHover
const MouseHover = document.querySelector('#list');

//funct listener
document.addEventListener('click',function(e){
    if(!MouseHover.contains(e.target) && !act.contains(e.target)){
        act.classList.remove('activated');
    }
});


// toggle input
const aktif = document.querySelector('.input');

//funct
document.querySelector('#cari').onclick = () =>{
    aktif.classList.toggle('aktif');
}



// disable mousewheel on a input number field when in focus
// (to prevent Chromium browsers change the value when scrolling)
$('form').on('focus', 'input[type=number]', function (e) {
    $(this).on('wheel.disableScroll', function (e) {
      e.preventDefault()
    })
  })
  $('form').on('blur', 'input[type=number]', function (e) {
    $(this).off('wheel.disableScroll')
  })