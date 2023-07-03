<template>
<!-- Включает в себя строку с описанием товара-->
  <div>
    <h1>Carousel</h1>
    <carousel>
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "MainCarousel.vue"
}
</script>

<style scoped>
h1 {
  font-size: 25px;
  text-align: center;
  margin: 10px;
  padding: 20px;
}
</style>