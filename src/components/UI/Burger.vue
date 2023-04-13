<template>
    <button :class="[{ 'active': isActive }, 'burger']" @click="toggleBurger">
        <span></span>
    </button>
</template>


<script setup>

import { ref, watch } from "vue";  
  
const isActive = ref(props.isActive)

const emit = defineEmits(['on-burger'])  
  
const props = defineProps({  
    isActive:{  
        type: Boolean,  
        required: true  
    }  
})  
  
  
function toggleBurger(){  
    isActive.value = !isActive.value  
    emit('on-burger', isActive.value)  
    
} 

watch(() => props.isActive, (newVal) => {
  isActive.value = newVal
  document.body.style.overflow = isActive.value ? 'hidden' : '';
}) 


</script>


<style lang="scss" scoped>
.burger {
    border:none;
    background-color:#FFF5EA;
    width: 40px;
	height: 40px;
	position: relative;
            
    span,
    ::before,
    ::after {
        display: block;
        width: 30px;
	    height: 2px;
	    position: absolute; 
        background-color: black;
        transition: transform 0.2s ease-out;
    }

    ::before{
        content: '';
        transform: translateY(-10px);
    }

    ::after{
        content: '';
        transform: translateY(10px);
    }
}    

.burger.active {
    span{
        height: 0;
    }

    ::before{
        transform: rotate(45deg);
        transition: transform 0.2s ease-out;
    }

    ::after{
        transform: rotate(-45deg);
        transition: transform 0.2s ease-out;
    }
}

   

</style>




















