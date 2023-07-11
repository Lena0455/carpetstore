<template>
<!--  Одна карточка товара. Включает в себя фото товара, две иконки, стоимость товара и скидку -->
  <div class="card" v-for="item in props.items" :key="item.id">
    <div>{{item.name}}</div>
<!--    <div>{{ item.image }}</div>-->

    <p>{{ getDiscount(item) }}rub. <span style=""
                                         v-if="item.discount">{{ item.price }}rub.</span></p>
    <button @click="() => {
      // basket.push(item)
    }">add
    </button>
  </div>
  <!--пример локальной регистрации компонента
  <ComponentA />-->
  <div>
    <!-- Здесь результат функции отрисовки выбранного ковра    -->
  </div>
</template>

<!--пример локальной регистрации компонента
import ComponentA from './ComponentA.vue'-->

<script setup>
/* Функция отрисовки выбранного ковра */
import {defineProps} from "vue";

const props = defineProps(["items"]);

function getDiscount(item) {
  return item.discount ? item.price - (item.price / 100) * item.discount : item.price;
}

</script>


<style scoped>
.img-block {
  width: 210px;
  height: 350px;
  object-fit: cover;
  display: block;
}

.item-social {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background: #ded3f1;
  /* background: #fefdff; */
  text-decoration: none;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  font-size: 20px;
}
.card {
  display: inline-block;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
</style>