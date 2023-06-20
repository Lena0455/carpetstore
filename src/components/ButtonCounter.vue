<template>
  <button @click="count++">
    You clicked me {{ count }} times.
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

</style>