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
    flex-grow: 1;
    flex-direction: column;
    max-width: 1200px;
}
}
    
</style>