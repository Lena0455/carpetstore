<!--component registration part 3-->
<!--Корневой элемент который содержит только основные разделы. Здесь содержиться массив ковров-->
<template>
  <div class="wrapper">
    <div class="container">
      <MyHeader/>
      <router-view/>
      <CatalogItem/>
      <CarpetCart/>
<!-- v-bind привязываем массив items     -->
      <CardProduct :items="items"></CardProduct>
        <div v-for="item in basket" :key=item.name>{{item.name}}</div>
      <MyFooter/>

    </div>
  </div>

</template>
<!-- component registration part 1-->
<!-- component registration part 2-->
<!-- Создать массив ковров в корневом компоненте и передавать через пропс в дочерние-->
<script setup>

import MyHeader from "@/components/MyHeader";

import CarpetCart from "@/components/CarpetCart";
import MyFooter from "@/components/MyFooter";
import CatalogItem from "@/components/CatalogItem";


const items = [
  {
    // (item)
    image: "../Source/img/uzbek-carpet-chivacarpet-237beige-brown-1-410x410.jpg",
    price: 9790,
    sale: true,
    title: "Ковер c золотым орнаментом",
    art: "HL-714-ZOL",
    discount: 5,
    id: 1,

  },
  {
    image: "/Source/img/pexels-max-vakhtbovych-6890403.jpg",
    price: 8790,
    sale: false,
    title: "Ковер выставочный",
    art: "HL-714-IND",
    discount: 0,
    id: 2,
  },
  {
    image: "/Source/img/turkish-carpet-opera-5828ecream-grey-oval-1-410x410.jpg",
    price: 17790,
    sale: false,
    title: "Маленький серый ковер",
    art: "HL-214-GR",
    discount: 0,
    id: 3,
  },
  {
    image: "/Source/img/pexels-tatiana-syrikova-3932930.jpg",
    price: 117790,
    sale: false,
    title: "Белая шкура",
    art: "HL-714-IND",
    discount: 0,
    id: 4,
  },
  {
    image: "/Source/img/turkish-carpet-vista-a068agrey-brown-1-410x410.jpg",
    price: 790,
    sale: true,
    title: "Ковер с геометрическим рисунком",
    art: "HL-719-KON",
    discount: 2,
    id: 5,
  },
]
items.forEach(item => console.log(item));
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

*,
*::before,
::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

/*Reset bootstrap style*/
.form-check-input:active,
.form-check-input:hover,
.form-check-input:focus,
.form-check-input:checked {
  outline: none !important;
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
  font-family: Montserrat;
  font-weight: 400;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  margin: 0 auto;
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 15px 30px 15px 30px;
}

.wrapper-min {
  overflow: hidden;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 15px 30px 15px 30px;
  background-color: #e9ecef;
}

.container {
  max-width: 1000px;
  padding: 15px 30px 15px 30px;

}

.header {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  flex: 1 1 auto;
}

.header-container {
  position: relative;
  display: flex;
  min-height: 80px;
  align-items: center;
}

.header-container > form {
  flex-grow: 1;
}

.container {
  padding: 0 0;
  box-sizing: content-box;
}

.header__contact {
  flex-wrap: wrap;

}
.title {
  font-size: 18px;
  margin-bottom: 18px;
  color: #495057;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}
.logo {
  font-size: 32px;
  font-weight: 400;

  text-decoration: none;
}

.logo:hover {
  text-decoration: none;

}

.logo::first-letter {

  font-weight: 600;

}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #8342b9;
}
</style>
