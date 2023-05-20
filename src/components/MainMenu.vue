<template>
  <div>
    <nav class="header__menu">
      <ul class="menu__list">
        <li v-for="item in menuItems" :key="item.name" class="menu__item">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
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
.menu__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
}
.menu__link {
  text-decoration: none;
  /*color: $textcolor;*/
}
</style>
