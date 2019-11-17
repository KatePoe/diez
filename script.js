document.documentElement.className = document.documentElement.className.replace('no-js', 'js');


//кнопка меню 
var toggler = document.getElementById('toggler');
toggler.addEventListener('click', mainNavVisibleToggle);
function mainNavVisibleToggle(e) {
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
}











// Флаг включённости слайдера
var slickSliderActive = false;

// Включение или выключение слайдера (в зависимости от ширины)
function checkSlider(){    
  
  // Если вьюпорт уже чем 1280 
  if($(window).width() < 1280 - getScroll()){
    
    // Если флаг включённости опущен, то включим и поднимем флаг
    if(slickSliderActive == false){
      $('#video-wrap').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      slickSliderActive = true;
    }
  
  // Иначе (вьюпорт НЕ уже чем 1280)
  } else {
    
    // Если флаг включённости поднят, выключаем и опускаем флаг
    if(slickSliderActive){
      $('#video-wrap').slick('unslick');
      slickSliderActive = false;
    }
    
  }
};

// По готовности DOM...
// $(document).ready(function(){
  checkSlider();
// });

// По любому изменению размера вьюпорта...
$(window).on('resize', function(){
   checkSlider();
});

function getScroll(){
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollWidth;
}