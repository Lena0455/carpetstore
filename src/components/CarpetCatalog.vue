<!-- Поле которое включает в себя поле фильтров и поле карточек -->
<template>
  <h1>Catalog</h1>

  <div class="container-global-frame">
    <div class="grid-container-global">
      <CatalogFilters/>
      <!-- v-bind or :items   привязываем массив к компоненту  -->
      <CatalogItem :items="items"></CatalogItem>
      <!--  <router-link :to="text.path">{{text.image}}-->
      <!--    <img class="icon" :src="text.img" alt="image"/></router-link>-->
    </div>
  </div>
</template>

<script setup>

// import {ref} from "vue";
import CatalogItem from "@/components/CatalogItem";
import CatalogFilters from "@/components/CatalogFilters";
// const basket = ref([]);
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

  },
  {
    img: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
    price: 8790,
    sale: false,
    name: "Ковер выставочный",
    art: "HL-714-IND",
    discount: 0,
    id: 2,
  },
  {
    img: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
    price: 17790,
    sale: false,
    name: "Маленький серый ковер",
    art: "HL-214-GR",
    discount: 0,
    id: 3,
  },
  {
    img: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
    price: 117790,
    sale: false,
    name: "Белая шкура",
    art: "HL-714-IND",
    discount: 0,
    id: 4,
  },
  {
    img: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
    price: 790,
    sale: true,
    name: "Ковер с геометрическим рисунком",
    art: "HL-719-KON",
    discount: 2,
    id: 5,
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
