<!-- Поле которое включает в себя логотип, поиск по сайту, кнопку поиска, три иконки,
подсчет количества товара, главное меню сайта -->
<template>
  <!-- LOGO -->
  <header class="header">
    <div class="header__container _container">
      <a href="" class="header__logo">Carpet</a>
      <!-- <div class="icon-favorites"><img class="some-icon" src="/Source/icons/Layers.svg" alt="cart"></div> -->
      <!-- SEARCH -->
      <form>
        <div class="search__container _search">
          <input type="text" name="text" class="search" placeholder="Поиск..">
          <!-- <form action="#" method="get" enctype="multipart/form-data"></form> -->
          <input type="submit" name="submit" class="submit" value="Search">
        </div>
      </form>
          <!--        <input type="text" min="1" max="9" class="numb-min" placeholder="1">-->
          <ButtonCounter/>
      <MainIcons/>
<!--          <CarpetCart></CarpetCart>-->
    </div>
  </header>

  <MainMenu/>
  <MainCarousel/>
</template>

<script setup>
// import HeaderSearch from "@/components/HeaderSearch";
import MainMenu from "@/components/MainMenu";
import ButtonCounter from "@/components/ButtonCounter";
import MainCarousel from "@/components/MainCarousel"
// import CarpetCart from "@/components/CarpetCart";
import MainIcons from "@/components/MainIcons"

</script>

<style scoped>
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

.header {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  flex: 1 1 auto;
}
.header__container {
  position: relative;
  display: flex;
  min-height: 80px;
  align-items: center;
}

.header__container > form {
  flex-grow: 1;
}

._container {
  padding: 0 0;
  box-sizing: content-box;
}

.header__logo {
  font-size: 32px;
  font-weight: 400;
  /*color: $textcolor;*/
  text-decoration: none;
}

.header__logo:hover {
  text-decoration: none;
  /*color: $hovcolor;*/
}

.header__logo::first-letter {
  /*color: $logo;*/
  color:  #7954a3;
  font-weight: 600;

}


.search__container {
  display: flex;
  flex-grow: 1;
}

.search {
  height: 50px;
  top: 0;
  left: 0;
  z-index: 50;
  background: #ffffff;
  /*background: $prcolor;*/
  border-radius: 6px 0 0 6px;
  margin: 0 0 0 32px;
  padding: 0 0 0 20px;
  width: 100%;
  flex-grow: 1;
}

.search:focus {
  /*background: $prcolor;*/
  background: #ffffff;

}

.search:hover {
  /*// background: $prcolor;*/
  background: #ffffff;

}

.input {
  padding: 4px 10px;
  border: 0;
  font-size: 16px;
  max-width: 100%;
  outline: none;
}

element.style {
}

.search:focus-visible {
  outline: none;
  /*//outline-color: $logo-darck;*/
}
.submit {
  background-color: #7954a3;
  color: #ffffff;
  border-radius: 0 6px 6px 0;
  padding: 10px;
  margin-right: 32px;
}

.submit:active {
  /*background-color: $prcolor;*/
  background: #ff7b00;

  /*color: $hovcolor;*/
}

.submit:hover {
  /*background-color: $logo-light;*/
  transition: .2s;
}

.submit:focus {
  /*background: $prcolor;*/
  background: #ffffff;

}

.header__icon {
  align-items: center;
}

.icon__list {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding-left: 0;
  margin-bottom: 0;
}

.icon {
  width: 24px;
  height: 24px;
}

.icon:hover {
  transform: scale(1.1);
}

.grid-container-filter > div {
  padding: 10px 0 10px 0;
  text-align: start;
  cursor: pointer;
}


.grid-container-global > div {
  display: grid;
  cursor: pointer;
}


.grid-container-card {
  /*grid-container-global (родитель) > div (наследник) grid-template-columns: auto auto auto;*/
  grid-template-rows: auto;
  row-gap: 25px;
  column-gap: 16px;
  justify-items: center

}


.img-block {
  width: 210px;
  height: 350px;
  object-fit: cover;
  display: block;

}


.icon-positions-favorites {
  position: relative;
}

.icon-positions-cart {
  position: relative;
}


.icon-img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.favorites {
  position: absolute;
  top: -350px;
  right: 0px;
}

.cart {
  position: absolute;
  bottom: 0px;
  right: 0px;
}

span {
  /*color: $textcolor;*/
  padding: 0 2px 0 20px;
}

span-decoration {
  /*text-decoration: line-through $link;*/
  /*color: $textcolor;*/
}


p {
  margin-bottom: 0 !important;
  margin-right: 0;
}


a {
  text-decoration: none !important;
}

</style>
