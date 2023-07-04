<template>
  <button class="numb-min" @click="count++">
 {{ count }}
  </button>

</template>

<script setup>
import { ref } from 'vue' // Возможно ref это импортированная функция
const count = ref(0)
/*export default {
  data() {
    return {
      count: 0
    }
  }
}*/



</script>

<style scoped>

.numb-min {
  position: absolute;
  top: 9px;
  right: 24px;
  outline: none;
  width: 20px;
  height: 20px;
  font-weight: 500;
  font-size: 12px;
  border-radius: 10px;
  color: #495057;
  background-color: #ffffff;
}
</style>