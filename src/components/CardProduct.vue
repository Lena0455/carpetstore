<template>
  <div class="img-block" v-for="item in props.items" :key="item.id">
    <div>{{ item.image }}
    </div>
    <p>{{ getDiscount(item) }}rub. <span style="text-decoration: line-through"
                                         v-if="item.discount">{{ item.price }}rub.</span></p>
    <button class="item-social" @click="() => {
      // basket.push(item)
    }">add
    </button>
    <img src="/Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg">
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
</style>