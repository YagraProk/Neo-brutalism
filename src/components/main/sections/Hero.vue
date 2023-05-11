<template>
    <div class="hero">
        <h1 class="hero_title">
            <span>Start to take</span>
            <span>a change.</span>  
        </h1>
            <p class="hero_text">
                <span>Instant, global, and cheap fees.</span>
                <span>What more could you asked for?</span>
            </p>
        <div><Button/></div>
    </div>
</template>


<script setup>
import Button from '@/components/main/ui/Button.vue'
</script>


<style lang="scss" scoped>

.hero{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 80px;
            
    &_title{
        display: flex;
        flex-direction: column;
        -webkit-text-stroke: 1px Black;
        margin-bottom: 20px;
     
    span:first-child{
        color: #FFFB47;
        text-shadow: 2px 2px 0px #000000;
    }
    }
    
    &_text{ 
        line-height: 28px;
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    } 
    
    div {
        display: flex;
        justify-content: center;
    }
}

@media(min-width: 768px){

.hero{
    margin-bottom: 180px;               
    
    &_text{
        margin-bottom: 67px;
    }
}
}
</style>




















