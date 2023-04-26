<template>
  <div>
<!--    <h1>{{ msg }}</h1>-->
    <nav class="header__menu _menu">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="" class="menu__linc linc">Каталог</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__linc linc">Услуги</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__linc linc">Доставка</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__linc">Оплата</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__linc">Отзывы</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__linc">Акции</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__linc">Контакты</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "DashBoard.vue",
  props: {
    msg: String
  }
}
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
.menu__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
}
.menu__linc {
  text-decoration: none;
  /*color: $textcolor;*/
}
</style>