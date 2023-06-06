<template>
    <div class="getstarted-layout">
        <the-header/>
        <slot/>
    </div>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
</script>

<style scoped>
@media (min-width:1200px){
.getstarted-layout {
    display: flex;
    /* justify-content: center; */
    /* width: 100%; */
    flex-direction: column;
    /* align-items:center; */
    /* align-self: center; */
    /* text-align: center; */
   
}
}
</style>