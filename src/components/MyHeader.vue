<!-- Поле которое включает в себя логотип, поиск по сайту, кнопку поиска, три иконки,
подсчет количества товара, главное меню сайта -->
<template>
  <HeaderLogo/>
  <HeaderSearch/>
  <ButtonCounter/>
  <MainIcons/>
  <MainMenu/>
</template>

<script>
import MainMenu from "@/components/MainMenu";
export default {
  name: "MyHeader",
  components: {MainMenu}
}
</script>

<style scoped>

</style>
