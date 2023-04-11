<template>
  <div class="cheap" id="Service">    
    <div class="cheap_wrapper">
      <div class="inner">
        <div class="inner_block">
          <img class="dollarbackground" src="@\assets\images\Cheapimages\Cheapdollarbackground.svg" alt="Cheap dollar background" >
          <img class="dollarsign" src="@\assets\images\Cheapimages\$.svg" alt="Dollar sign">
        </div>
        <div class="inner_arrow">
          <img src="@\assets\images\Cheapimages\Cheapvector.svg" alt="">
        </div>
        <div class="inner_block">
          <img class="dollarbackground" src="@\assets\images\Cheapimages\Cheapdollarbackground.svg" alt="Cheap dollar background" >
          <img class="dollarsign" src="@\assets\images\Cheapimages\$.svg" alt="Dollar sign">
        </div>
      </div>
      <h1>0.5% only</h1>
    </div>
    <h2 class="cheap_title">
      <div class="text">Cheap fees <strong>transfer</strong>, <br/>no fixed cents.</div>
    </h2>
  </div>
</template>


<script setup>

</script>


<style lang="scss" scoped>

.cheap{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px 15px 0px 15px;
  box-sizing: border-box;

  &_wrapper {
    box-sizing: border-box;
    z-index: -1;
    max-width: 801px;
    width: 100%;
    max-height: 351px;
    height: calc(100vw * (351/801));
    position: relative;
    background: #9747ff;
    border: 4px solid #000000;
    box-shadow: 12px 12px 0px #000000;
  
  .inner {
    margin: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  &_block {
    position: relative;
    z-index: 1;
    min-width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

  .dollarbackground {
    position: absolute;
    z-index: -1;
    width: 90%;
  }
  
  .dollarsign{
    width:25%;
  }
  }
  
  &_arrow {
    width: 100%;
    padding: 10px;
  
  img {
    width: 100%;
  }
  }
  }

  h1{
  font-family: 'IBM Plex Mono', sans-serif;
  color: white;
  letter-spacing: -0.04em;
  line-height: 87%;
  text-align: center;
  font-size: 30px;
  }
  }

  &_title{
    margin: auto;
  }

  .text{
    margin-top: 10px;
  }
}


@media (min-width:480px) {
  .cheap{
    
    &_wrapper{
    
    h1{
      font-size: 40px;
    }
    }
  }
}

@media (min-width:768px) {
  .cheap{
    margin-top: 100px;

    &_title{
  
    .text{
      margin-top: 20px;
    }
    }
    
    &_wrapper{
    
    h1{
      font-size: 64px;
    }
    }
  }
}

@media (min-width:1000px) {
  .cheap{
    margin: 100px 10px 10px 10px;
    gap:20px;

    &_wrapper{
      margin: auto;
    }
  }
}

@media (min-width:1440px) {
  .cheap{
    margin-bottom: 135px;

    &_title{
      padding-right: 37px;
    .text{
      margin-top: 20px;
    }
    }
  }
}

</style>