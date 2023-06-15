<template>
  <TheMain/>
</template>


<script setup>

import TheMain from '../components/TheMain.vue'
import {onMounted, onUpdated} from 'vue'


onUpdated(() =>{
  console.log('Я перешел')
})  

</script>


<style scoped>

</style>