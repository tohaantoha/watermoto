$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    /*стрелки удаляем*/
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();//вырубаем ссылки при нажатии на  таб чтобы не переходило по ссылке при нажатии

    $($(this).siblings()).removeClass('tab--active');//при клике на tab он будет у всех выпиливаться tab--active  а у этого (tab) остается активный класс например tab и tab--active так будет./ есть такой метод siblings который ищет соседние элементы и забирает у соседних элементов tab--active а этому оставляет (this) siblings это братья и сестры. Он не лезет к тем кто внизу на странице

    //у нас появилась новая обертка мобайл оверфлоу табс враппер родитель для кнопок перент находит мобайл оверфлоу а нам надо чтобы находил tabs-wrapper потом находим соседнего search__content. closest имеется ввиду текущий элемент tabs-wrapper. нажимаем на tab кнопку
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active'); //Нажали на tab это строчка (поиск по номеру) и .tabs-content это поиск по номеру(поисковая строчка) добавляется активный класс tabs-content--active а удругих убирается. благодоря этому запись появляется (поиск по номеру) // 
    //<div class="tabs-wrapper">
    //<div class="tabs">
    //<a class="tab tab--active" href="#"></a>
    //</div>
    //<div class="tabs-container">
    //<div class="tabs-content"></div>
    //</div>
    //</div > 
    //parent мы идем к родителю  a у таба родитель табс (search__content). У табса есть сосед табс контейнер (search__content)а внутри него идет табс контент. this у таба находим  родителя потом находим его брата siblings. получается табс контейнер siblings (search__content) а find поиск внутри него находится табс контент или они у нас дивы и можно написать див........результат теперь тобы работают только со своими братьями и сестрами и к другим нелезут это была цель
    $(this).addClass('tab--active');// на то что мы нажали tap ему добавляем  активный класс это tab--active. Тоесть нажали на Поиск по номеру он стал в серой рамочке активный класс добавился tab--active.
    $($(this).attr('href')).addClass('tabs-content--active')// доллар и круглые скобки $(.......) это поиск элемента.. Внутри в скобках $(this) это тот на кого нажали tab. Точкой attr() забираем значение. Тоесть кликаем на поиск по номеру а у него есть атрибут hreff и оно забирает значение #tab-1. а #tab-1 это тоже самое что id='tab-1' Вместо этого ставится обращение к айдишнику тоже самое если бы прописали $('#tab-1') Дальше добавляем класс tabs__content--active...   вместо $($(this).attr('href')) вставится обращение к айдишнику тоже самое если бы прописали $('#tab-1')
  
    $('.product-slider').slick('setPosition');//чтобы не было наезда букв и цифр инициализация
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active')//что тогда к нему при первом клике добавится при втором уберется. this конкретно для него на кого нажали.
  });

  $('.product-slider').slick({
    slidesToShow: 4, //показывать 4 слайдера
    slidesToScroll: 1, //прокручивается по 1 слайду
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    /*стрелки удаляем*/
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          //врубаем точки
          dots: true
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3, //показывать 3 слайдера
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2, //показывать 2 слайдера
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1, //показывать 1 слайдера
          dots: true
        }
      }
    ]
  });


  $('.filter-style').styler();//придумываем наш класс к которому будем подключаться
  //когда нажимаем на  .filter__item-drop то тогда этому же элементу добавляется filter__item-drop--active. И тот элемент который идет следующим делал бы слайдтогл. Вызов этого метода приводит к плавному сворачиванию slideToggle(200)
  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200)
  });//нажали на дополнительные параметры появилось слово more и .filter__extra появился класс filter__item-drop--active и .filter__extra-content появился слово море это наша активность

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });// делаем ползунок в штмл прописали дата атрибуты

  //при клике на кнопку происходит .catalog__filter-button происходит добавление catalog__filter-button--active во второй строчке this именно этот add это добавить класс/ при клике .catalog__filter-btngrid у грида добавляется класс актив catalog__filter-button--active то тогда .catalog__filter-btnline будет убираться catalog__filter-button--active
  //нажимаем на квадрат с точками добавляется активный класс catalog__filter-button--active
  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    //а у нашей кнопки с палочками убирается активный класс
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    //кликаем на грид тогда класс product-item__wrapper--list должен исчезать
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    //product-item__wrapper--list класс который увеличивает нашу картинку скутер делает  ее большой убирается этот класс и она не показывается
  });

  //при клике на .catalog__filter - btnline на кнопку с палочками у product-item__wrapper это где наша картинка со скутером будет добавляться класс
  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    //а у грида кнопка квадратик с точками убирается активный класс и наши 12 скутеров не показываются
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });
  //когда мы кликаем btnline кнопка тогда добавляется класс product-item__wrapper--list и наша карточка товара где скутер и цена .product-item__wrapper переходит в большую картинку так как добавился product-item__wrapper--list к классу product-item__wrapper а у них характеристика такая что они вместе показываю большую картинку на 100%
  $(".rate-yo").rateYo({
    ratedFill: "#1C62CD",
    spacing: "7px",
    normalFill: "#C4C4C4"
  });
  //при клики на кнопку меню меню будет появляться при повторном исчезать
  $('.menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });
/*нажимаем на футер топ тайтл это информация и интернет магазин происходит сворачивание внутреннего содержимого Toggle это переключить сама работа заключается в том что добавляется например футер листу высота значения подключаюся новые когда уберается список происходит стайл дисплей нан*/
  $('.footer__topdrop').on('click', function(){

  $(this).next().slideToggle();// идет к следующему элементу
    $(this).toggleClass('footer__topdrop--active');//а у текущего добавление класса. тоесть раскрывается список у активного и становится дисплей блок а когда второй раз нажимаем список исчезает и дисплей нон
});
//делаем слово фильтр под которое будет подныревать текст
  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();// идет к следующему элементу

});

});