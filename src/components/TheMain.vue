<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
    <main class="main">
        <section class="hero">
            <h1 class="hero__title">
                <span>Start to take</span>  <br/> a change.
            </h1>
            <p class="hero__text">
                Instant, global, and cheap fees. <br/> What more could you asked for?
            </p>
            <div><Button/></div>
        </section>
        <section class="section section-first">
            <img class="section-first-img" src="@\assets\images\Image1.png" alt="Transfer image">
            <h2 class="section-first-title">
                Cheap fees <strong>transfer</strong>, <br/>no fixed cents.
            </h2>
        </section>
        <section class="section section-second">
          <div class="container__text">  
          <h1 class="section-second-title">
                Globally Available!
            </h1>
            <p class="section-second-text">
                We are expanding to over 110+ countries    
            </p>
            <p class="section-second-text">
                See supported countries
                <img src="@\assets\images\Vector-arrow.svg" alt="Arrow to globe image">
            </p>
            </div>
            <img class="section-second-img" src="@\assets\images\Image2.png" alt="Globe image" >
        </section>
        <section class="section section-third">
            <img class="section-third-img" src="@\assets\images\Image3.png" alt="Time image" >
            <div class="container__text">  
            <h1 class="section-third-title">
                Time is <span>money.</span> 
            </h1>
            <p class="section-third-text">
                Real-time transfer and payouts WORLDWIDE!
            </p>
            <div><Button/></div>
            </div>
        </section>
    </main>    
</template>
  
 
  
  <style scoped>
    .main{
        max-width: 1300px;
        margin: 0 auto;
    }

    .hero{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 175px;
    }

      .hero__title{
        -webkit-text-stroke: 1px Black;
        padding-bottom: 36px;
    }

    .hero__title span{
        color: #FFFB47;
        text-shadow: 2px 2px 0px #000000;
    }
    
    .hero__text{
        line-height: 122%;
        padding-bottom: 57px;
    }

    .section{
      display: flex;
    }

    .section-first{
      justify-content: space-between;
      margin-bottom: 135px;
    }

    .section-first-title{
      padding-top: 139px;
      padding-right: 37px;
    }

    .section-second {
      display: flex;
      justify-content: space-between;
      margin-bottom: 100px;
    }

    .section-second-title{
      margin-bottom: 36px;
    }
        
    .section-second-text{
      text-align: right;
      padding-bottom: 117px;
    }
    
    .section-third-img{
      padding-right: 65px;
    }

    .section-third-title{
      margin-bottom: 36px;
    }

    .section-third-title span{
      background-color: #BAFFCD;
      color: #37AB00;
    }

    .section-third-text{
      padding-bottom: 128px;
    }

    @media (max-width: 1270px) {
    
    .section-first-img{
      width: 70%;
      height: 70%;
      padding-left: 15px;
    }

    .section-first-title {
      padding-left: 20px;
      font-size: 30px;
      padding-top: 0px;
      margin: auto;
    }

    .section-second-img {
      width: 50%;
      height: 50%;
    }

    .section-second-title {
      padding-left: 15px;
      font-size: 45px;
    } 

    .section-third-title{
      font-size: 55px;
    }
    .section-third-text{
      font-size: 20px;
    }
    }

    @media (max-width: 1060px) {
      .section-second-title {
      font-size: 40px;
    } 

    .section-second-text{
      font-size: 20px;
    }

    .section-third-img{
      width: 70%;
      height: 70%;
}
    .section-third-title{
      font-size: 35px;
}
    .section-third-text{
      font-size: 16px;
}

  }

  @media (max-width: 960px) {
   
    .section-second {
      margin-bottom: 50px;
    }
    .section-second-title{
      margin-bottom: 36px;
      text-align: center;
    }
        
    .section-second-text{
      text-align: right;
      padding-bottom: 57px;
    }

    .section-third-img{
      width: 60%;
      height: 60%;
    }

    .section-third-title{
      font-size: 35px;
      line-height: 125%;
    }

    .section-third-text{
      padding-bottom: 64px;
    }
    }
  
    @media (max-width: 760px) {
      
      .hero{
      margin-bottom: 100px;
    }
      .section-first-title {
      padding-left: 15px;
      font-size: 20px;
      padding-top: 0px;
      margin: auto;
    }

    .section-first{
      margin-bottom: 75px;
    }
   }
    
    @media (max-width: 550px) {
      .section{
      flex-direction: column;
      align-items:center;
      gap:15px;
    }
    .section-first{
      margin-bottom: 45px;
    }
    .section-second-title{
      margin-bottom: 16px;
    }
        
    .section-second-text{
      display: flex;
      padding-bottom: 17px;
      text-align: center;
      justify-content: center;
    }

     p img{
      display: none;
     }
     .section-third-title{
      text-align: center;
     }

    .section-third-text{
      text-align: center;
      padding-bottom:32px;
     }

    .container__text div{
      text-align: center;
    }
  }

  @media(max-width: 380px){
    .hero{
      margin-bottom: 50px;
    }
}

  </style>
  