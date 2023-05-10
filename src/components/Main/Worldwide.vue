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
  display: flex;
  flex-direction: column;
  align-items:center;
  box-sizing: border-box;
  gap: 30px;
  margin-bottom: 50px;

  &_wrapper{ 
    display: block;
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    z-index: -1;
    width: 100%;
    aspect-ratio: 1 / 1;
    max-width: 452px;
    position: relative;
    background: #FFFB47;

  .twelve{
    top: 5px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .six{
    bottom: 5px;
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
    gap: 40px;
    
  .title{
    text-align: center;
    line-height: 40px;
    margin: 0;
    font-size: 35px;
    
  span{
    background-color: #BAFFCD;
    color: #37AB00;
  }
  }

  .text{
    text-align: center;
    margin: 0;
    line-height: 30px;
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
  margin-bottom: 70px;

  &_wrapper{
    box-shadow: 12px 12px 0px #000000;
  }

  &_content{
    gap: 60px;     
  .title{
    font-size: 50px;
    line-height: 55px;
    
  }
  }
}
}

@media(min-width:1000px){
.worldwide{
  flex-direction: row;
  margin-bottom: 80px;
  gap: 50px;
            
  &_content{
    
  .title{
    margin-bottom: 74px;
  }
  }

  .text{
    margin-bottom: 138px;
  }
}
}

@media(min-width:1200px){

.worldwide{
  
  &_content{
    gap: 0;

  .title{
    font-size: 64px;
    line-height: 70px;
  }

  .text{
    margin-bottom: 256px;
  }

  div{
    align-self: start;
  }    
  }
}
}
</style>




















