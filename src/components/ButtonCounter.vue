<template>
  <h1><button @click="count++">
 {{ count }}
  </button></h1>

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
h1 {
  font-size: 25px;
  text-align: center;
  margin: 1px;
  padding: 2px;
}
</style>