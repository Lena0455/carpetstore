<template>
  <!--  Одна карточка товара. Включает в себя фото товара, две иконки, стоимость товара и скидку -->

  <!--  Данные из родительского компонента передаются сюда в дочерний через props-->
  <!--  <div class="grid-container-global">-->
<!--  <div v-for="item in basket" :key=item.name>-->
<!--    {{ item.name }}-->
<!--  </div>-->
  <div class="card-container, grid-container-card">
    <div class="card">
<!--      <img class="img-block" :src="item.img" alt="image"/>-->
      <button class="red" @click="addToBasket(props.item)">add</button>
      <div class="product-details">
        <div class="product-price">
          <p>{{ props.item?.price }} ₽</p>
          <!--          <p>{{ getDiscount(item) }} ₽ <span style="" v-if="item.discount">{{ item.price }} ₽</span></p>-->
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
  <!--пример локальной регистрации компонента
  <ComponentA />-->
  <div>
    <!-- Здесь результат функции отрисовки выбранного ковра    -->
  </div>
</template>

<!--пример локальной регистрации компонента
import ComponentA from './ComponentA.vue'-->

<script setup>

import {defineProps, ref} from "vue"; // импортируем макрос
// export default {props: ['items']}
// определяем массив через props
const props = defineProps(["item"]);

console.log(props.item);

// массив с содержимым корзины
const basket = ref([]);
// const basket = [];

// addToBasket отображает каждый элемент массива
function addToBasket(item) {
  // basket.push(item);
  basket.value.push(item);
}
console.log(basket)



// function getDiscount(item) {
//   return item.discount ? item.price - (item.price / 100) * item.discount : item.price;
// }

</script>


<style scoped>
.img-block {
  width: 210px;
  height: 350px;
  object-fit: cover;
  display: block;
}

.card {
  display: inline-block;
  /*margin: 10px;*/
  /*padding: 10px;*/
}

.grid-container-global > div {
  display: grid;
  cursor: pointer;
}

.grid-container-card {
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  row-gap: 25px;
  column-gap: 16px;
  justify-items: center;
}

.grid-container-card {
  grid-area: card;
}

.product-details {
  border-radius: 0 0 6px 6px;
  /*background-color: $logo-pur;*/

  background-color: #ded3f1;
}

.product-price {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

}

.red {
  color: red;
}
</style>
