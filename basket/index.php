<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Электроник</title>
  <!-- вариант подключения через Google Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <!-- normalize.css - сброс к единым стилям для всех браузеров -->
  <link rel="stylesheet" href="normalize.css">
  <link rel="stylesheet" href="jquery.fancybox.min.css">
  <link rel="stylesheet" href="OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css">
  <link rel="stylesheet" href="OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css">
  <link rel="stylesheet" href="slick.css">
  <link href="hamburgers.css" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header__row">
    <div class="container">
      <div class="header__row">
         <div class="vector">
           <a href="https://yandex.ru/maps/47/nizhny-novgorod/house/verkhne_pechyorskaya_ulitsa_14b/YE0YdgFpSkcAQFtsfX55dH9lZw==/?ll=44.069327%2C56.285364&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=16" target="_blank"><img src="images1\mdi.png" alt="vector"></a>
         </div>
   
          <div class="header__nav">
            <ul class="header__nav-list">
            <li class="header__nav-item">
                <a href="https://yandex.ru/maps/geo/nizhniy_novgorod/53105078/?ll=43.833528%2C56.304645&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=10" target="_blank">Нижний Новгород</a>
              </li>
              <li class="header__nav-item">
                <a href="https://yandex.ru/maps/47/nizhny-novgorod/house/verkhne_pechyorskaya_ulitsa_14b/YE0YdgFpSkcAQFtsfX55dH9lZw==/?ll=44.069327%2C56.285364&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=16" target="_blanc">Магазины</a>
              </li>
              <li class="header__nav-item">
                <a href="http://localhost/site.local/www/electronic/delivery/">Доставка</a>
              </li>
            </ul>
          </nav><!-- //навигация -->
      </div>
         <!--Переключатель меню-->
         <a href="http://localhost/site.local/www/electronic/catalog/"button class="hamburger hamburger--squeeze header__toggle js-menu-toggle" type="button">
            <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
      </a>
    </button>
    <div class="header__name">
            <h1>Электроник</h1>
          </div>
  <!-- The form -->
<form class="example" action="http://localhost/site.local/www/electronic/apple/">
  <input type="text" placeholder="Поиск.." name="search">
</form>
            </div>
            <div class="logos">
              <div class="whatsapp">
              <a href="https://www.whatsapp.com/" target="_blank"><img src="images1\whatsapp.png" alt=""></a>
            </div>
              <div class="akaunt">
                <a class="noDecoration"href="http://localhost/site.local/www/electronic/account/" target="_blank"><img src="images1\vektor.png" alt=""></a>
              <p>Аккаунт</p>
            </div>
              <div class="heart">
              <a href="http://localhost/site.local/www/electronic/TV/" target="_blanc"><img src="images1\heart.png" alt=""></a>
              <p>Избранное</p>
            </div>
              <div class="basket">
              <a href="http://localhost/site.local/www/electronic/apple/" class="header__cart">
              <span class="header__cart-number">1</span>
              <a class="noDecoration"href="http://localhost/site.local/www/electronic/apple/" target="_blank"><img src="images1\basket.png" alt=""></a>
              <p>Корзина</p>
            </a>
            </div>
</header>
   </div>
<!--end header-->  
<strong><h2 class="section__title">В корзину добавлены товары</h2></strong>
   <div class="about__title">
       <p>Перейдите в каталог, чтобы добавить свои товары<br>или войдите в свой аккаунт, чтобы<br>посмотреть уже добавленные<br> товары</p>
   </div>
   <div class="item_box">
   <h3 class="item_title">Apple 11</h3>
   <p>Цена: <span class="item_price">53 991</span>₽</p>
   <button class="add_item" data-id="5">Купить</button>
   <button id="checkout">Оформить заказ</button>
   <button id="clear_cart">Очистить корзину</button>
   <div id="cart_content">
</div>
</div>
   <!-- <a class="noDecoration"href="file:///C:/Users/Toshiba/Desktop/electronic/index.html" target="_blank"><div class="btn-red">Перейти на главную</div></a> -->
   <a class="noDecoration" href="http://localhost/site.local/www/electronic/account/" target="_blank"><div class="btn-white">Войти в свой аккаунт</div></a>
  



    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>