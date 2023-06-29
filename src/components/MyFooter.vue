<!-- Поле которое включает в себя иконки социальных сетей-->
<template>
  <div>
    <MainIcons/>
    <h1>Footer</h1>
    <div class="footer">
      <div class="footer-icons">
        <ul class="social-list">
          <li v-for="item in footerIcons" :key="item.name" class="social-item">
            <router-link :to="item.path">{{ item.path }}</router-link>
          </li>
        </ul>
        <!-- FOOTER -->
        <footer class="footer">
          <div class="footer-row">
            <div class="footer-text">2021-2022&copy;CARPET Интернет-магазин ковров</div>
          </div>
        </footer>
      </div>
    </div>
  </div>


</template>

<script setup>
// export default {
//   name: "MyFooter"
// },
const footerIcons = [
  {
    name: '/Source/icons/icons8-facebook 1.svg',
    path: '/facebook'
  },
  {
    name: '/Source/icons/icons8-instagram 1.svg',
    path: '/instagram'
  }
]
</script>

<style scoped>
.footer-icons {
  padding: 10px 0 10px 0;
}

.footer-row {
  display: flex;
  justify-content: center;
}

.social-list {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 0;
  gap: 5px;
}

.social-list {
  margin-bottom: 10px;
}

.footer-text {
  font-size: 11px;
}

.social-item {
  cursor: pointer;
}

.social-media-first {
  width: 30px;
  height: 30px;
  border-radius: 6px;
}

.footer-text {
  /*color: $prcolor;*/
}
</style>
