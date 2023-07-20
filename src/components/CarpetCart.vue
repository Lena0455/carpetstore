<!-- Корзина -->
<template>
  <div>
    <div class="wrapper-min">
      <div class="card" v-for="item in props.basket" :key="item.id">
<!--        <div  v-for="item in items" :key = "item.id" >{{item}}</div>-->
        <div id="basket"></div>
        <div id="full-sum"></div>
        <div id="sum"></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {defineProps} from "vue"; // импортируем макрос или функция
const props = defineProps(["basket"]);
</script>

<style scoped>

.wrapper-min {
  overflow: hidden;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 15px 30px 15px 30px;
  background-color: gray;
}

#basket > div:nth-child(2n) {
  background-color: #DEE2E6FF;
}

#basket > div:nth-child(2n+1) {
  background-color: #E9ECEFFF;
  /*Если вы указать #basket div, то стиль будет применен ко всем div внутри #basket, независимо от степени вложенности.
  А если  #basket > div, то стиль будет применен, только к "прямым" дочерним элементам "первой степени вложенности"*/

}

#sum > div:first-child {
  /*background-color: #b1d2c1;*/
  /*background-color: #cbd5d5;*/

  background-color: #ded3f1
}
</style>