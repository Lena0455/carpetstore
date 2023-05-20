<template>
  <h1>Footer</h1>
  <div class="footer">
    <div class="footer__icons">
      <ul class="icon__social-list">
        <li v-for="item in footerIcons" :key="item.name" class="icon__social-item">
         <router-link :to="item.path">{{item.path}}</router-link>
        </li>
      </ul>
      <!-- FOOTER -->
      <footer class="footer">
        <div class="footer__row">
          <div class="footer__text">2021-2022&copy;CARPET Интернет-магазин ковров</div>
        </div>
      </footer>
      </div>
  </div>

</template>

<script>
// export default {
//   name: "MyFooter"
// },
const footerIcons = [
  {
    name: '/Source/icons/icons8-facebook 1.svg',
    path:'/facebook'
  },
  {
    name: '/Source/icons/icons8-instagram 1.svg',
    path:'/instagram'
  }
]
</script>

<style scoped>
.footer__icons {
  padding: 10px 0 10px 0;
}
.footer__row {
  display: flex;
  justify-content: center;
}
.icon__social-list {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 0;
  gap: 5px;
}
.icon__social-list {
  margin-bottom: 10px;
}
.footer__text {
  font-size: 11px;
}
.icon__social-item {
  cursor: pointer;
}

.social-media-first {
  width: 30px;
  height: 30px;
  border-radius: 6px;
}

.footer__text {
  /*color: $prcolor;*/
}
</style>
