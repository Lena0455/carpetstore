<template>
  <!--  Одна карточка товара. Включает в себя фото товара, две иконки, стоимость товара и скидку -->

  <!--  Данные из родительского компонента передаются сюда в дочерний через props-->
  <!--  <div class="grid-container-global">-->
  <div class="card-container, grid-container-card">
    <div class="card" v-for="item in props.items" :key="item.id">
      <img class="img-block" :src="item.img" alt="image"/>
      <div v-for="item in basket" :key=item.name>
        {{ item.name }}
      </div>
      <button @click="() => {
             basket.push(item)
          }">add
      </button>
      <div class="product-details">
        <div class="product-price">
          <p>{{ item.price }} ₽</p>
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

// // Функция добавления объектов в массив массив
const basket = []

// // отображает каждый элемент массива
// // items.forEach(item => console.log(item));
// items.forEach((item) => {
//       basket.push(item)
//     }
// )
console.log(basket)
import {defineProps} from "vue"; // импортируем макрос
// export default {props: ['items']}
// определяем массив через props
const props = defineProps(["items"]);


//
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