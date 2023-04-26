<template>
  <form>

      <div class="search__container _search">
        <input type="text" name="text" class="search" placeholder="Поиск..">
        <!-- <form action="#" method="get" enctype="multipart/form-data"></form> -->
        <input type="submit" name="submit" class="submit" value="Search">
      </div>

  </form>
</template>

<script>
export default {
  name: "InputSearch.vue",
  props: {
    msg: String
  }
}
</script>

<style scoped>

.search__container {
  display: flex;
  flex-grow: 1;
}

/*search_button__pressed searchButtonPressed SearchButtonPressed search_button search-button*/
.search {
  height: 50px;
  top: 0;
  left: 0;
  z-index: 50;
  /*background: $prcolor;*/
  border-radius: 6px 0 0 6px;
  margin: 0 0 0 32px;
  padding: 0 0 0 20px;
  width: 100%;
  flex-grow: 1;
}
</style>