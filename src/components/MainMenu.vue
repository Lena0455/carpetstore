<!-- Перебирает массив с основными разделами страницы -->
<template>
  <!--    <h1>MainMenu</h1>-->
  <!--          Наиболее простой формой привязки данных является интерполяция текста с использованием синтаксиса «усы» (двойные фигурные скобки)-->
  <div>
    <nav class="header__menu _menu">
      <ul class="menu__list">
        <li v-for="item in menuItems" :key="item.name" class="menu__item">
          <div class="menu__linc linc">
            <router-link :to="item.path">{{ item.name }}</router-link>
          </div>
        </li>
      </ul>
    </nav>
  </div>
<MainCarousel/>
</template>

<script setup>
const menuItems = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Каталог",
    path: "/catalog",
  },
  {
    name: "Услуги",
    path: "/services",
  },
  {
    name: "Доставка",
    path: "/delivery",
  },
  {
    name: "Оплата",
    path: "/payment",
  },
  {
    name: "Отзывы",
    path: "/reviews",
  },
  {
    name: "Акции",
    path: "/promotion",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
]

</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #8342b9;
}
*,
*::before,
::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}


a {
  text-decoration: none;
  font-size: 17px;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2 {
  font-weight: inherit;
  font-size: inherit;
}

html,
body {
  height: 100%;
  line-height: 1;
  font-family: Montserrat !important;
  font-weight: 400;
}


.header__container > form {
  flex-grow: 1;
}

._menu {
  color: inherit;
}

.menu__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
}

/*.menu__item:non(:last-child) {*/
/*   margin: 0 85px 0 0;*/
/*  }*/


/*.menu__item:hover {*/
/*  transform: scale(1.1);*/
/*}*/

.menu__linc {
  text-decoration: none;
  /*width: 100px;*/
  /*height: 100px;*/
  border-radius: 6px;
  padding: 6px;
  /*color: $textcolor;*/
  color: #495057;
}

.menu__linc:hover {
  text-decoration: none;
  /*color: $hovcolor;*/
  color: #8342b9;
  outline: 2px solid;
}

.menu__linc:active {
  /*outline: 2px solid $prcolor;*/
}

.grid-container-filter > div {
  padding: 10px 0 10px 0;
  text-align: start;
  cursor: pointer;
}

.grid-container-global > div {
  display: grid;
  cursor: pointer;
}

span {
  /*color: $textcolor;*/
  padding: 0 2px 0 20px;
}

span-decoration {
  text-decoration: line-through;
  /*color: $textcolor;*/
}

price-white {
  /*color: $prcolor;*/
  padding: 8px 2px 8px 2px;
}

p {
  margin-bottom: 0 !important;
  margin-right: 0;
  font-size: 18px;
}

a {
  text-decoration: none !important;
}

</style>
