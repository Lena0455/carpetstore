<!-- Поле фильтр, которое включает в себя чекбоксы и радиокнопки -->
<template>
  <div class="grid-container-filter">

<!--    <div class="item"><h6 class="title">Бренд</h6>-->
    <div class="item" v-for="item in props.filters" :key="item.title"><h6 class="title">{{ item.title }}</h6>

<!--      <div id="v-model-radiobutton">-->
<!--        <input type="checkbox" id="one" value="Один" v-model="picked" />-->
<!--        <label for="one">Один</label>-->
<!--        <br />-->
<!--        <input type="checkbox" id="two" value="Два" v-model="picked" />-->
<!--        <label for="two">Два</label>-->
<!--        <br />-->
<!--        <span>Выбрано: {{ picked }}</span>-->
<!--        -->
<!--      </div>    <form action="#" method="get" enctype="multipart/form-data"></form>-->
    </div>
    <div class="item"><h6 class="title">Страна</h6>
      <div class="form-check">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label">
          <p>Китай</p>
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label">
          <p>Россия</p>
        </label>
      </div>
    </div>

    <div class="slidecontainer">
    <input type="range" min="1" max="100" value="50" class="slider">
  </div>

<!--    <button class="success" @click="choiceCountry">Применить</button>-->

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
.form-check {
     display: flex;
}
.form-check-input {
  border: none !important;
  outline: none !important;
  width: 18px !important;
  height: 18px !important;

}

.form-check-input:checked {
  /*color: fuchsia !important;*/
  /*outline: #fefdff solid 4px !important;*/

}

.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}


.form-check-label {
  margin: 4px;
}


.slider {
  appearance: none;
  width: 85%;
  height: 4px;
  border-radius: 5px;
  /*background: $prcolor;*/
  background: #ced4da;
  outline: none;
  opacity: 0.7;
//transition: .2s;
}


.slider::-webkit-slider-thumb {
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 25%;
  /*background: $logo;*/
  background: #8342b9;
  cursor: pointer;
}
.slider:hover {
  opacity: 1;
}
.success {
  background-color: #8342b9;
  /*color: $prcolor;*/
  color: #ffffff;
  border-radius: 6px 6px 6px 6px;
  padding: 10px;
  margin-left: 80px;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;

}
</style>