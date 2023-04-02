<template>
    <main class="main">
      <Hero/>
      <Cheap/>
      <Available/>
       <Worldwide/> 
    </main>    
</template>
  
 
<script setup>
import Button from '@/components/Button.vue'
import Hero from '@/components/Main/Hero.vue'
import Cheap from '@/components/Main/Cheap.vue'
import Available from '@/components/Main/Available.vue'
import Worldwide from '@/components/Main/Worldwide.vue'
</script>


  <style scoped>
    .main{
        max-width: 1300px;
        margin: 0 auto;
    }

   </style>
  