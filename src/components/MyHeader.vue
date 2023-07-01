<!-- Поле которое включает в себя логотип, поиск по сайту, кнопку поиска, три иконки,
подсчет количества товара, главное меню сайта -->
<template>
  <div>

    <div class="header">
      <div class="header__container_container">
        <div class="search-container">
          <HeaderSearch/>
        </div>
      </div>
      <MainIcons/>
      <ButtonCounter/>
      <MainMenu/>
    </div>
  </div>


</template>

<script setup>
import HeaderSearch from "@/components/HeaderSearch";
import MainMenu from "@/components/MainMenu";
import ButtonCounter from "@/components/ButtonCounter";

</script>

<style scoped>
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

.search-container {
  display: flex;
  flex-grow: 1;
}

</style>
