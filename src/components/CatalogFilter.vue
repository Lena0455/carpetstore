<!-- Поле фильтр, которое включает в себя чекбоксы и радиокнопки -->
<template>
  <div class="grid-container-filter">

<!--    <div class="item"><h6 class="title">Бренд</h6>-->
    <div class="item" v-for="item in props.filters" :key="item.title"><h6 class="title">{{ item.title }}</h6>
<!--      <form action="#" method="get" enctype="multipart/form-data"></form>-->
    </div>
  </div>
  <FilterCheckbox/>
  <FilterRadiobutton/>
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps(["filters"])
</script>

<style scoped>

.grid-container-filter > div {
  padding: 10px 0 10px 0;
  cursor: pointer;
}

.item {
  padding: 0 0 12px 0;
}
.title {
  padding: 0 0 12px 0;
}


.grid-container-filter {
  grid-area: filter;
}
</style>