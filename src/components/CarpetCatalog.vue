<!-- Поле которое включает в себя поле фильтров и поле карточек -->
<template>
  <h1>Catalog</h1>
  <!-- v-bind or :items   привязываем массив к компоненту  -->
  <div class="container-global-frame">
    <div class="grid-container-global">
      <CatalogFilter :filters="filters"></CatalogFilter>
      <CatalogItem :items="items"></CatalogItem>
      <!--  <router-link :to="text.path">{{text.image}}-->
      <!--    <img class="icon" :src="text.img" alt="image"/></router-link>-->
    </div>
  </div>

  <div v-for="item in catalog" :key=item.img>{{ item.img }}</div>

  <div v-for="item in basket" :key=item.name>{{item.name}}</div>

  <button class="success" @click="choiceCountry">ПPИМЕНИТЬ</button>
  <!--  {{ choiceCountry }}-->
  <!--  <MainButton/>-->
</template>

<script setup>


import CatalogItem from "@/components/CatalogItem";
import CatalogFilter from "@/components/CatalogFilter";

import {ref} from "vue";
const catalog = ref([])
const basket = ref([]);

const items = [
  {
    // (item)
    img: "../Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg",
    price: 9790,
    sale: true,
    name: "Ковер c золотым орнаментом",
    art: "HL-714-ZOL",
    discount: 5,
    id: 1,
    country: "Китай"

  },
  {
    img: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
    price: 8790,
    sale: false,
    name: "Ковер выставочный",
    art: "HL-714-IND",
    discount: 0,
    id: 2,

    //добавление категории для работы фильтра
    country: "Китай"
  },
  {
    img: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
    price: 17790,
    sale: false,
    name: "Маленький серый ковер",
    art: "HL-214-GR",
    discount: 0,
    id: 3,
    country: "Россия"
  },
  {
    img: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
    price: 117790,
    sale: false,
    name: "Белая шкура",
    art: "HL-714-IND",
    discount: 0,
    id: 4,
    country: "Китай"
  },
  {
    img: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
    price: 790,
    sale: true,
    name: "Ковер с геометрическим рисунком",
    art: "HL-719-KON",
    discount: 2,
    id: 5,
    country: "Россия"
  },
]
const choiceCountry = items.filter(items => items.country === "Китай")

// console.log (choiceCountry)
// console.log(items)
const filters = [
  {
    title: "Бренд"

  },
  {
    title: "Размер"
  },
  {
    title: "Форма",
  },
  {
    title: "Категория"
  },
  {
    title: "Материал"
  },
  {
    title: "Тип ворса"
  },
  {
    title: "Высота ворса"
  },
  {
    title: "Страна"
  },
  {
    title: "Цвет"
  },
  {
    title: "Цена"
  },
]

</script>

<style scoped>
h1 {
  font-size: 25px;
  text-align: center;
  margin: 10px;
  padding: 20px;
}

.container-global-frame {
  padding: 10px 0 10px 0;
  margin: 30px 0 30px 0;
}


.grid-container-global {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas: 'filter card'
                       'filter card'
                       'filetr card';
  column-gap: 5%;
  align-items: start;
}

.grid-container-filter {
  grid-area: filter;
}
</style>
