<template>
    <div class="default-layout">
        <component :is="$route.meta">
            <router-view/>
        </component>    
    </div>
</template>

<script setup>
    // import Main from '@/layouts/main.vue'
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