<template>
<!-- <a class="button" href="@\pages\getstarted\index.vue">Get started</a>  -->
<router-link class="button" to="@\pages\getstarted\index.vue">Get started</router-link>
<slot/>
</template>


<script setup>

</script>


<style scoped>

.button {
  border: 2px solid black;
  padding: 10px;
  background-color: #9747FF;
  transition-duration: 0.4s;
  box-shadow: black 2px 2px;
  color: #FFFFFF; 
  font-weight: 700;
  text-decoration: none;
  width: fit-content;
  display: block;
}

a:hover{
  background-color: #FFFB47; 
  color: black; 
}
</style>
