<script setup>
import TheHeader from './TheHeader.vue'
import Button from '/src/components/Button.vue'
</script>

<template>
  <TheHeader/>
  <div class="main">
    <div class="container">
        <div class="container__inner">
      <p class="text text__main">We are 0.5% on all transaction</p>
      <p class="text text__speech">No catch</p>
      <div><Button/></div>
        </div>
    </div>
  </div>
</template>

<style scoped>

  .main{
    margin-top: 131px;
    display: flex;
    box-sizing:border-box;
    justify-content: center;
    align-items:center;
    
  }

  .container{
    min-width: 671px;
    min-height: 415px;
    background-color: #FFFB47;
    border: 4px solid #000000;
    box-shadow: 12px 12px 4px #000000;
  }

  .container__inner{
    text-align: center;
    padding-top: 136px;
  }

  .text{
    font-size: 32px;
    line-height: 122%;
  }

  .text__main{
    font-family: 'IBM Plex Mono';
    font-weight: 400;
  }

  .text__speech{
    font-family: 'Inter';
    font-weight: 600;
    padding: 33px 266px 85px 266px;
  }

  @media (max-width: 1060px) {
    .main{
    margin-top: 50px;
    }
  }

  @media (max-width: 760px) {
    
    .container{
      min-width: 70%;
      min-height: 70%;
      margin: 10px;
    }
  .text{
    font-size: 20px;
    line-height: 122%;
  }

  .container__inner {
    padding-top: 40px;
  }

  .text__main{
    padding-left: 20px;
    padding-right: 20px;
  }

  .text__speech{
    padding: 20px;
  }

  .container__inner div{
    padding-bottom: 20px;
  }
}

@media (max-width: 550px) {

   .container__inner {
    padding-top: 20px;
    }
}

 </style>