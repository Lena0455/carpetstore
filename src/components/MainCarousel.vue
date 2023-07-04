<template>
  <swiper
      space-between="20"
      :loop="true"
      :pagination="{clickable: true}"
      :autoplay="{
    delay: 7000,
    disableOnInteraction:false,
    pauseOnMouseEnter: true
    }">
    <swiper-slide v-for="text in carouselSlides" :key="text.description">
      <div>
        <p>{{ text.description }}</p>
      </div>
      <!--        <img src="text.img">-->
      <img :src="text.img" alt="image"/>
    </swiper-slide>
  </swiper>


  <!-- Включает в себя строку с описанием товара-->
  <div>
    <h1>Carousel</h1>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class=""></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1" class="active"
                aria-current="true"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2" class=""></button>
      </div>
      <!-- The slideshow/carousel -->
      <div class="carousel-inner">
        <div class="carousel-item active carousel-item-start">
          <img src="Source/img/pexels-max-vakhtbovych-7195534.jpg" alt="" class="d-block" style="width:100%">
          <div class="carousel-caption">
            <h3></h3>
            <p>Ковер с треугольным рисунком</p>
          </div>
        </div>
        <div class="carousel-item carousel-item-next carousel-item-start">
          <img src="Source/img/pexels-max-vakhtbovych-6969866.jpg" alt="" class="d-block" style="width:100%">
          <div class="carousel-caption">
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="Source/img/pexels-max-vakhtbovych-6296925.jpg" alt="" class="d-block" style="width:100%">
          <div class="carousel-caption">
            <h3></h3>
            <p>Турецкий ковёр ручной работы</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
// import {Pagination, Autoplay} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import {ref} from 'vue'

const carouselSlides = ref([
  {
    description: 'Ковер с треугольным рисунком',
    img: 'Source/img/pexels-max-vakhtbovych-6296925.jpg'
  },
  {
    description: 'Изысканный полосатый ковер',
    img: 'Source/img/pexels-max-vakhtbovych-6969866.jpg'
  },
  {
    description: 'Турецкий ковёр ручной работы',
    img: 'Source/img/pexels-max-vakhtbovych-6296925.jpg'
  },
]);

</script>

<style scoped>
h1 {
  font-size: 25px;
  text-align: center;
  margin: 10px;
  padding: 20px;
}


*,
*::before,
::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2 {
  font-weight: inherit;
  font-size: inherit;
}

html,
body {
  height: 100%;
  line-height: 1;
  font-family: Montserrat !important;
  font-weight: 400;
}


.header__container > form {
  flex-grow: 1;
}

.grid-container-filter > div {
  padding: 10px 0 10px 0;
  text-align: start;
  cursor: pointer;
}

span {
  /*color: $textcolor;*/
  padding: 0 2px 0 20px;
}

span-decoration {
  text-decoration: line-through;
  /*color: $textcolor;*/
}

price-white {
  /*color: $prcolor;*/
  padding: 8px 2px 8px 2px;
}


.div7
.div#basket:nth-child(odd) {
  /*background: $gainsboro;*/
}


p {
  margin-bottom: 0 !important;
  margin-right: 0;
}

a {
  text-decoration: none !important;
}

.card-selected img {
  filter: brightness(10);
}

.card-selected > p.some-class:last-child > #test {

}

</style>
