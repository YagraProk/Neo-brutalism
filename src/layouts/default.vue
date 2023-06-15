<template>
    <div class="default-layout">
        <component :is="$route.meta">
            <router-view :key="$route.fullPath" />
        </component>    
    </div>
</template>

<script setup>
   
</script>

<style scoped>

@media (min-width:1200px){
.default-layout {
    display: flex;
    justify-content: center;
    width: 100%;
}
}
</style>