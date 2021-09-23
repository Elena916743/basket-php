/*Запуск слайдера*/
$('.topslider .topslider__list.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoHeight: false,
    mouseDrag: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    items: 11,
    autoplay: true,
    smartSpeed: 900,
    autoplayTimeout: 3000
  })


  $('.goods .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoHeight: true,
    mouseDrag: true,
    nav:false,
    dots:true,
    lazyLoad: true,
    autoplay: false,
    nav: false,
    smartSpeed: 900,
    autoplayTimeout: 1000,
    responsive: {
      0:{items:2,margin: 30},
      768:{items:3,margin: 30},
      991:{items:4,margin: 30},
    },
    nav: true, 
})

  
  // Наверх
  $(document).ready(function() {
    $(".toTop").hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.toTop').fadeIn();
      } else {
        $('.toTop').fadeOut();
      }
    });
    $('.toTop').click(function() {
      $('html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  
  // Кукисы
  function checkCookies() {
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('cookie_notification');
    if (!cookieNotification) {
      return
    }
    let cookieBtn = cookieNotification.querySelector('.cookie_accept');
  
  
  
    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
      cookieNotification.classList.add('show');
    }
  
    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function() {
      localStorage.setItem('cookieDate', Date.now());
      cookieNotification.classList.remove('show');
    })
  }
  checkCookies();


// Масска ввода номера телефона.
  $(document).ready(function(){
    $(".phone").inputmask("+7 (999) 999-9999");
  });




  $(document).ready(function() {
    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });

// Функция + - для товаров
function quantity() {
  //Regulator Up копки + в карточке товара при добавлении в корзину
  $('.qty-plus').off('click').click(function(){
    var 
      quantity = $(this).parent().find('.quantity, .cartqty'),
      currentVal = parseInt(quantity.val());
    if (!isNaN(currentVal)){
      quantity.val(currentVal + 1);
      quantity.trigger('change');
    }
    return false;
  });
  //Regulator Down копки - в карточке товара при добавлении в корзину
  $('.qty-minus').off('click').click(function(){
    var 
      quantity = $(this).parent().find('.quantity, .cartqty'),
      currentVal = parseInt(quantity.val());
    if (!isNaN(currentVal) && !(currentVal <= 1) ){
      quantity.val(currentVal - 1);
      quantity.trigger('change');
    }
    return false;
  });
  // Если вводят 0 то заменяем на 1
  $('.qty-wrap .quantity').off('change').change(function(){
    if($(this).val() < 1){
      $(this).val(1); 
    }
  });
  }
  // добавить товар в корзину
  var d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData(){
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e){
  this.disabled = true; // блокируем кнопку на время операции с корзиной
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
      parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
      itemId = this.getAttribute('data-id'), // ID товара
      itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
      itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
  if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    this.disabled = false; // разблокируем кнопку после обновления LS
  }
 return false;
}
// Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"
for(var i = 0; i < itemBox.length; i++){
  addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e){
  var cartData = getCartData(), // вытаскиваем все данные корзины
      totalItems = '';
  // если что-то в корзине уже есть, начинаем формировать данные для вывода
  if(cartData !== null){
    totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
    for(var items in cartData){
      totalItems += '<tr>';
      for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    cartCont.innerHTML = totalItems;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = 'В корзине пусто!';
  }
  return false;
}
/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  cartCont.innerHTML = 'Корзина очишена.';
});