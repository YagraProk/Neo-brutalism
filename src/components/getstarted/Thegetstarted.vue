<template>
    <div class="container">
      <form class="container_inner">
        <h3 class="title">Welcome!</h3>
        <input v-model="email" maxlength="25" size="40" name="Email" placeholder="Email">
        <input v-model="password" maxlength="25" size="40" name="password" placeholder="Password">
        <input type="submit" value="Sign Up" class="item">
      </form> 
          <ul class="contacts">
            <li v-for="({link, icon, alt}, index) in MODALNAV_LIST" :key="index">
              <a :href ="link"><img :src="icon" :alt="alt"></a>
            </li>
          </ul>  
      </div>
    
    
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import MODALNAV_LIST from '@/static/modalnav.js' 

    const email = ref(null)
    const password = ref(null)
    
  </script>
  
  <style lang="scss" scoped>
  
  .container{
    max-width: 1149px;
    max-height: 628px;
    background-color: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: 4px 4px 0px #000000;
    margin: 50px 10px;
    
    &_inner{
      padding: 25px 10px;
      align-items:center;
      display:flex;
      flex-direction: column;
      gap:30px;
  
    h3{
      font-family: 'IBM Plex Mono';
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      margin: 0;
    }
  
    input{
      height: 35px;
      width: 90%;
      max-width: 330px;
      border: 2px solid #000000;
    }
      
    ::-webkit-input-placeholder {
      padding: 10px;
      font-size: 16px;
      line-height: 20px;
    }
  
    .item{
      box-sizing:border-box;
      border: 2px solid black;
      background-color: #9747FF;
      transition-duration: 0.4s;
      box-shadow: black 2px 2px;
      max-width: 81px;
      color: #FFFFFF; 
      font-weight: 700;
      text-decoration: none;
      padding: 10px;
      // display: block;
      cursor: pointer;
    }  
    
    // a{
    //   color: #FFFFFF; 
    //   font-weight: 700;
    //   text-decoration: none;
    //   padding: 10px;
    //   display: block;
    // }  
    }
  
    .contacts{
      display: flex;
      gap: 25px;
    
    a{
      cursor: default;
  
    img{
      height: 24px;
      width: 24px;
      display: block;
    }
    }
    }
    }
  
  
  .item:hover{
    background-color: #FFFB47; 
    
    a{
      color: black;
    }
  }
  
  @media(min-width:768px){
    .container{
      &_inner{
     
      input{
        height: 40px;
      }
  
      .item{
        margin-bottom: 50px;
      }
  
      .contacts{
        margin-bottom: 50px;
        border: 2px solid black;
        padding: 5px;
      }
      }
    }
  }
  
  @media(min-width:1200px){
  
    .container{
      margin: 50px;
      border: 4px solid #000000;
      box-shadow: 12px 12px 0px #000000;
  
      &_inner{
     
      input{
        font-size: 20px;
      }
    
      .item{
        margin-bottom: 50px;
      }
  
      .contacts{
        padding: 10px;
      
      a{
      
      img{
        width: 32px;
        height: 32px;
      }
      }
      }
      }
    }
  }  
  
  </style>
  