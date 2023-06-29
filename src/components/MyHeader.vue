<!-- Поле которое включает в себя логотип, поиск по сайту, кнопку поиска, три иконки,
подсчет количества товара, главное меню сайта -->
<template>
  <div>
    <MainIcons/>
    <HeaderSearch/>
    <ButtonCounter/>
    <MainMenu/>
  </div>

</template>

<script setup>
import HeaderSearch from "@/components/HeaderSearch";
import MainMenu from "@/components/MainMenu";
import ButtonCounter from "@/components/ButtonCounter";

</script>

<style scoped>

</style>
