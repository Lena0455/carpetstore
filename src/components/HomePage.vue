<template>
  <!-- Поле включает в себя  карусель -->
  <MainCarousel/>
<!--    <MyHeader/>-->
<!--  <h1>Home</h1>-->
</template>

<script setup>

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
  font-family: Montserrat !important;
  font-weight: 400;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  margin: 0 auto;

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
}

.container {
  /*max-width: 1000 px;*/
  /*padding: 15 px 30 px 15 px 30 px;*/

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

h1 {
  font-size: 35px;
  text-align: center;
  margin: 10px;
  padding: 20px;
}

.header__logo {
  font-size: 32px;
  font-weight: 400;
  /*color: $textcolor;*/
  text-decoration: none;
}
</style>
