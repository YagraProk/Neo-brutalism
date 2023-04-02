<template>
    <div class="hero">
        <h1 class="hero_title">
            <span>Start to take</span>  <br/> a change.
        </h1>
            <p class="hero_text">
                Instant, global, and cheap fees. <br/> What more could you asked for?
            </p>
        <div><Button/></div>
    </div>
</template>


<script setup>
import Button from '@/components/Button.vue'
</script>


<style lang="scss" scoped>

.hero{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 50px; 
    margin-top: 30px;
        
    &_title{
        -webkit-text-stroke: 1px Black;
        margin-bottom: 0px;
     
    span{
        color: #FFFB47;
        text-shadow: 2px 2px 0px #000000;
    }
    }
    
    &_text{ 
        line-height: 122%;
        padding: 10px 20px 20px 20px;
    }    
}

@media(min-width: 768px){

.hero{
    margin-top: 70px;
                
    &_text{
        margin-bottom: 47px;
    }
}
}
</style>




















