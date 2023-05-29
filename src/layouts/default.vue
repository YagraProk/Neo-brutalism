<template>
    <div class="default-layout">
        <component :is="$route.meta">
            <router-view/>
        </component>    
    </div>
</template>

<script setup>
    import Main from '@/layouts/main.vue'
</script>