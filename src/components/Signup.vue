<script setup>
import TheHeader from './TheHeader.vue'

</script>

<template>
  <TheHeader/>
  <div class="main">
    <div class="container">
        <div class="container__inner">
      <h3 class="title">Welcome!</h3>
      <p class="email"><input maxlength="25" size="40" name="Email" placeholder="Email"></p>
      <p class="password"><input type="password" maxlength="25" size="40" name="password" placeholder="Password"></p>
      <div class="item__container">
        <a class="item" href="Signup.html">Sign Up</a>
      </div> 
        <div class="contacts">
        <a class="contacts__in" href="#"> 
            <img src="src\components\images\Signup_linkedin.png" alt="">
        </a>
        <a class="contacts__google" href="#">
            <img src="src\components\images\Signup_google.png" alt="">
        </a>
        <a class="contacts__facebook" href="#">
            <img src="src\components\images\Signup_Facebook.png" height="32px" width="32px" alt="">
        </a>
        </div>  
      </div>
    </div>
  </div>
  
</template>

<style scoped>

  .main{
    margin-top: 113px;
    display: flex;
    box-sizing:border-box;
    justify-content: center;
    align-items:center;
    
  }

  .container{
    min-width: 1149px;
    min-height: 628px;
    background-color: #FFFFFF;
    border: 4px solid #000000;
    box-shadow: 12px 12px 0px #000000;
  }

  .container__inner{
    text-align: center;
    padding-top: 117px;
  }

  h3{
    font-family: 'IBM Plex Mono';
    font-weight: 700;
    font-size: 32px;
    line-height: 122%;
  }

  input{
    height: 35px;
    width: 400px;
    border: 2px solid #000000;
  }

  ::-webkit-input-placeholder {
    padding: 10px 280px 10px 10px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 122%;
  }
  .email{
  padding-top: 40px; 
  }

  .password{
    padding-top: 20px; 
  }

.item__container{
  padding-top: 55px;
  padding-bottom: 100px;
}

   .item {
  border: 2px solid black;
  padding: 10px;
  background-color: #9747FF;
  transition-duration: 0.4s;
  box-shadow: black 2px 2px;
  color: #FFFFFF; 
  font-weight: 700;
  text-decoration: none;
  margin-top: 334px;
}

.item:hover{
  background-color: #FFFB47; 
  color: black; 
 }

 .contacts{
  display: inline-flex;
 
  border: 1px solid black;
  box-sizing:border-box;
  gap: 35px;
 }

 a{
  cursor: default;
 }

 @media (max-width: 1270px) {
  .main{
    margin-top: 100px;
  }

  .container{
    min-width: 90%;
  }
 }
 
 @media (max-width: 550px) {
  .main{
    margin-top: 30px;
  }

  .container{
    min-height: 90%;
  }

  .container__inner{
    padding-top: 50px;
    padding-bottom: 20px;
  }

  .item__container{
    padding-top: 35px;
    padding-bottom: 50px;
  }
   
  input{
   width: 300px;
  }
 }
</style>