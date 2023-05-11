<template>
    <main class="main">
      <Hero/>
      <Cheap/>
      <Available/>
      <Worldwide/> 
    </main>    
</template>
  
 
<script setup>
import Hero from '@/components/main/sections/Hero.vue'
import Cheap from '@/components/main/sections/Cheap.vue'
import Available from '@/components/main/sections/Available.vue'
import Worldwide from '@/components/main/sections/Worldwide.vue'
</script>


  <style scoped>
  .main{
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
  }

@media(min-width: 768px){
  .main{
    padding: 0 20px;
  }
}

   </style>
  