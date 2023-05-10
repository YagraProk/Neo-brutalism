<template>
  <div class="cheap" id="Service">    
    <div class="cheap_wrapper">
      <div class="inner">
        <img class="inner_dollar" src="@\assets\images\Dollar.svg" alt="Dollar">
        <img class="inner_arrow" src="@\assets\images\Cheapimages\Cheapvector.svg" alt="Two side vector">     
        <img class="inner_dollar" src="@\assets\images\Dollar.svg" alt="Dollar">
      </div>  
      <h2>0.5% only</h2>
    </div>
    <p class="cheap_title">
      <span>Cheap fees <strong>transfer</strong>,</span> 
      <span>no fixed cents.</span>
    </p>
  </div>
</template>


<script setup>

</script>


<style lang="scss" scoped>

.cheap{
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  gap:20px;
  margin-bottom: 60px;
  
  &_wrapper {
    box-sizing: border-box;
    background-color: #9747FF;
    max-width: 801px;
    max-height: 351px;
    width: 100%;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    position: relative;
    z-index: -1;
      
  .inner {
    padding: 5%;
    display: flex;
    align-items: center;
    gap: 10px;

  &_dollar {
    min-width: 20%;
  }
  
  &_arrow {
    min-width: 50%;
  }
  }

  h2{
  font-family: 'IBM Plex Mono', sans-serif;
  color: white;
  letter-spacing: -0.04em;
  line-height: 26px;
  text-align: center;
  font-size: 25px;
  }
  }

  &_title{
  display: flex;
  flex-direction: column;
  margin: 0;
  }
}


@media (min-width:480px) {
  .cheap{
    gap:40px;
    
    &_wrapper{
    
    h2{
      font-size: 40px;
    }
    }

    &_title{
      flex-direction: row;

    }
  }
}

@media (min-width:768px) {
  .cheap{
    margin-bottom: 100px;  
    
    &_wrapper{
      box-shadow: 12px 12px 0px #000000;
    
    h2{
      font-size: 64px;
    }
    }

    &_title{
      line-height: 26px;
    }
  }
}

@media (min-width:1000px){
  .cheap{
    margin-bottom: 160px; 
    flex-wrap: nowrap;

    &_title{
      display: block;
    }
  } 
}


@media (min-width:1440px) {
  
  .cheap{
    margin-bottom: 180px;
  }
}

</style>