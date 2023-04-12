<template>

<div class="worldwide" id="Company">
    <div class="worldwide_wrapper">
      <span class="twelve">12</span>
      <span class="six">6</span>
      <span class="nine">9</span>
      <span class="three">3</span>
      <div class="inner">
        <div class="inner_block1">
          <img class="dollarbackground" src="@\assets\images\Timeimages\Dollarbgvertical.svg" alt="Time dollar background" >
          <img class="dollarsign" src="@\assets\images\Timeimages\$forvertical.svg" alt="Dollar sign">
        </div>
        <div class="inner_block2">
          <img class="dollarbackground" src="@\assets\images\Timeimages\Dollarbg.svg" alt="Time dollar background" >
          <img class="dollarsign" src="@\assets\images\Timeimages\$.svg" alt="Dollar sign">
        </div>
      </div>
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
  margin: 40px 15px 0px 15px;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-sizing: border-box;

  &_wrapper {
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
    left: calc(50% - 15px);
  }

  .six{
    top: 88%;
    left: calc(50% - 15px);
  }

  .nine{
    top: 47%;
    left: 5%;
  }

  .three{
    top: 47%;
    left: 90%;
  }
  
  .inner{
    margin-top:25%;
    display: flex;
  
  &_block1 {
    padding-left: 40%;
    margin-top: -8%;
    position: relative;
    z-index: 1;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

  .dollarbackground {
    position: absolute;
    z-index: -1;
    width: 50%;
  }
  
  .dollarsign{
    width:75%;
  }
  }

  &_block2 {
    padding-top: 18%;
    margin-left: -15%;
    position: relative;
    z-index: 2;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: dollar 60s infinite; 
    transform-origin: -15% 80%; 
    
  .dollarbackground {
    position: absolute;
    z-index: -1;
    width: 190%;
  }
  
  .dollarsign{
    width:50%;
  }
  }
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
    padding-bottom: 40px;
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
    margin-bottom: 80px;
  }

  .text{
    padding-top: 38px;
  }
}
}

@media(min-width:1000px){
.worldwide{
  flex-direction: row;
            
  &_content{
    margin-bottom: 80px;
    margin-left: 15px;
  }

  .text{
    padding-top: 38px;
    padding-bottom: 128px;
  }
}
}

@media(min-width:1200px){

.worldwide{
  margin-top: 100px;
  margin-bottom: 108px;

  &_content{
  
  .title{
    line-height: 87%;
    margin-bottom: 36px;
  }

  .text{
    margin-top:0;
    padding-top: 0;
    padding-bottom: 128px;
  }

  div{
    margin-right: auto;
  }    
  }
}
}
</style>




















