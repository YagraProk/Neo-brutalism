<template>

<div class="worldwide" id="Company">
    <div class="worldwide_wrapper">
      <span class="twelve">12</span>
      <span class="six">6</span>
      <span class="nine">9</span>
      <span class="three">3</span>
      <img class="worldwide_dollar static" src="@\assets\images\Dollar.svg" alt="Time dollar" >
      <img class="worldwide_dollar animate" src="@\assets\images\Dollar.svg" alt="Time dollar" >
    </div>
    <div class="worldwide_content">  
      <h1 class="title">
        Time is <span>money.</span> 
      </h1>
      <p class="text">
        Real-time transfer and payouts WORLDWIDE!
      </p>
      <div><Button/></div>
    </div>
</div>

</template>


<script setup>
import Button from '@/components/Button.vue'
</script>


<style lang="scss" scoped>

.worldwide{
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-sizing: border-box;

  &_wrapper{ 
    display: block;
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid #000000;
    box-shadow: 12px 12px 0px #000000;
    z-index: -1;
    width: 100%;
    aspect-ratio: 1 / 1;
    max-width: 452px;
    position: relative;
    background: #FFFB47;

  .twelve{
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .six{
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .nine{
    top: 50%;
    left: 0%;
    transform: translate(50%, -50%);
  }

  .three{
    top: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
  }
  }
 
  &_content{
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 50px;
    
  .title{
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0px;
    
  span{
    background-color: #BAFFCD;
    color: #37AB00;
  }
  }

  .text{
    text-align: center;
    margin-bottom: 40px;
  }
  }  

  &_dollar{
      position: absolute;
      top:50%;
      left: 50%;
      width: 40%;

    &.static{
      transform: translate(-50%, -100%) rotate(-90deg); 
    }
    
    &.animate{
      top:40%;
      animation: dollar 60s infinite;
      transform-origin: 0% 50%;
    }
  }
}


.twelve,
.six,
.three,
.nine {
  position: absolute;
  font-family: 'IBM Plex Mono';
  font-size: 32px;
  letter-spacing: -0.04em;
}

@keyframes dollar {
100%{
transform: rotate(360deg);
}
}

@media(min-width:768px){
.worldwide{
   
  &_content{
    margin-bottom: 70px;    
  .title{
    margin-bottom: 38px;
  }

  .text{
    margin-bottom: 80px;
  }
  }
}
}

@media(min-width:1000px){
.worldwide{
  flex-direction: row;
  margin-bottom: 80px;
            
  &_content{
    margin-left: 15px;

  .title{
    margin-bottom: 74px;
  }
  }

  .text{
    margin-bottom: 128px;
  }
}
}

@media(min-width:1200px){

.worldwide{
  
  &_content{
  
  .title{
    line-height: 87%;
  }

  .text{
    margin-bottom: 256px;
  }

  div{
    margin-right: auto;
  }    
  }
}
}
</style>




















