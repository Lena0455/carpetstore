<template>
  <swiper
          space-between="20"
          :loop="true"
          :pagination="{clickable: true}"
          :autoplay="{
    delay: 7000,
    disableOnInteraction:false,
    pauseOnMouseEnter: true,
    button: true

    }">
    <swiper-slide v-for="text in carouselSlides" :key="text.description">

      <div>
        <img class="full" :src="text.img" alt="image"/>
        <div class="carousel-text">
          {{ text.description }}
        </div>
      </div>
    </swiper-slide>
<!--        <div class="swiper-pagination-bullet"></div>-->
  </swiper>
  <div>
    <!--    Не убирать div-->
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
    img: '/Source/img/pexels-max-vakhtbovych-7195534.jpg'
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
/*.swiper-pagination-bullet1 {*/
/*  color: #ffffff !important;*/
/*  width: 20px;*/
/*  height: 20px;*/
/*  --swiper-pagination-color: var(--swiper-theme-color);*/
/*  --swiper-pagination-color: red;*/
/*  --swiper-pagination-left: auto;*/
/*  --swiper-pagination-right: 8px;*/
/*  --swiper-pagination-bottom: 8px;*/
/*  --swiper-pagination-top: auto;*/
/*  --swiper-pagination-fraction-color: inherit;*/
/*  --swiper-pagination-progressbar-bg-color: rgba(0, 0, 0, 0.25);*/
/*  --swiper-pagination-progressbar-size: 4px;*/
/*  --swiper-pagination-bullet-size: 8px;*/
/*  --swiper-pagination-bullet-width: 8px;*/
/*  --swiper-pagination-bullet-height: 8px;*/
/*  --swiper-pagination-bullet-inactive-color: #000;*/
/*  --swiper-pagination-bullet-inactive-opacity: 0.2;*/
/*  --swiper-pagination-bullet-opacity: 1;*/
/*  --swiper-pagination-bullet-horizontal-gap: 4px;*/
/*  --swiper-pagination-bullet-vertical-gap: 6px;*/

/*}*/

.full {
  width: 100%;
  object-fit: cover;
}

.carousel-text {
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>