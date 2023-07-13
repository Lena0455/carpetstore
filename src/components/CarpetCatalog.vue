<!-- Поле которое включает в себя поле фильтров и поле карточек -->
<template>
  <h1>Catalog</h1>
  <CatalogFilters />
  <!-- v-bind or :items   привязываем массив   -->
    <CatalogItem :items="items"></CatalogItem>
      <div v-for="item in items" :key=item.id>{{item.id}}</div>
</template>

<script setup>

// import {ref} from "vue";
import CatalogItem from "@/components/CatalogItem";
// const basket = ref([]);
const items = [
  {
    // (item)
    image: "../Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg",
    price: 9790,
    sale: true,
    name: "Ковер c золотым орнаментом",
    art: "HL-714-ZOL",
    discount: 5,
    id: 1,

  },
  {
    image: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
    price: 8790,
    sale: false,
    name: "Ковер выставочный",
    art: "HL-714-IND",
    discount: 0,
    id: 2,
  },
  {
    image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
    price: 17790,
    sale: false,
    name: "Маленький серый ковер",
    art: "HL-214-GR",
    discount: 0,
    id: 3,
  },
  {
    image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
    price: 117790,
    sale: false,
    name: "Белая шкура",
    art: "HL-714-IND",
    discount: 0,
    id: 4,
  },
  {
    image: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
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
</style>
