<!-- Поле фильтр, которое включает в себя чекбоксы и радиокнопки -->
<template>
<!--  <div class="container-global-frame">-->
<!--    <div class="grid-container-global">-->
       <p>filter</p>
      <div class="grid-container-filter">
        <div class="item"><h6 class="title">Бренд</h6>
          <form action="#" method="get" enctype="multipart/form-data"></form>

          <div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label">
              <p>Agnelle</p>
            </label>
          </div>
        </div>
      </div>
<!--    </div>-->
<!--  </div>-->
  <FilterCheckbox/>
  <FilterRadiobutton/>
</template>

<script setup>
// import CatalogFilters from "@/cmponents/CatalogFilters"

// export default {
//   components: {FilterRadiobutton, FilterCheckbox}
// }
</script>

<style scoped>

.grid-container-filter > div {
  padding: 10px 0 10px 0;
  cursor: pointer;
}
.item {
  padding: 0 0 12px 0;
}
.container-global-frame {
  padding: 10px 0 10px 0;
  margin: 30px 0 30px 0;
}

   .grid-container-global {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-template-rows: repeat(2, auto);
     grid-template-areas: 'filter card'
                       'filter card'
                       'filetr card';
     column-gap: 5%;
     align-items: start;
   }

.grid-container-filter {
  grid-area: filter;
}
</style>