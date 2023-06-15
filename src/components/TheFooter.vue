<template>
  <footer class="footer" id="countries">
    <div class="footer_inner">
      <a href="/" class="logo">
        <img src="@\components\main\ui\logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul class="menu_list">
          <li class="block" v-for="({link, title, submenu}, index) in FOOTERNAV_LIST" :key="index">
            <router-link class="head_submenu" :to="link">{{ title }}</router-link>
                    <ul class="submenu_list"> 
			                <li class="item" v-for="({sublink, subtitle}, index) in submenu" :key="index"><a :href="sublink">{{ subtitle }}</a></li>
                    </ul>
          </li>
        </ul>
      </nav>
      <div class="contacts">
        <a class="contacts_item" v-for="({link, icon, alt}, index) in FOOTERCONTACTS_LIST" :key="index" :href="link"> 
            <img :src="icon" :alt="alt">
        </a>
      </div>
    </div>
  </footer>
  
</template>


<script setup>
import FOOTERCONTACTS_LIST from '@/static/footercontacts.js'
import FOOTERNAV_LIST from '@/static/footernav.js'

</script>


<style  lang="scss" scoped>

  .footer{
    max-width: 1512px;
    border-top: 2px solid #000000;
    margin: auto;
        
    &_inner{
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      padding: 10px;
      align-items:center;
      gap: 40px;
      
    .logo{
      cursor:default;

    img{
      width: 40px;
      height: 40px;    
    }
    }
    }
  }

  .menu{
    
    &_list{
      display: flex;
      flex-direction: column;
      padding: 0;
      text-align: center;
      gap: 25px;
      margin: 0;
        
    .head_submenu{
      font-family: 'IBM Plex Mono';
      font-weight: 700;
      font-size: 24px;
      line-height: 26px;
      letter-spacing: -0.04em;
      cursor: pointer;
    }
    
    .submenu_list{
      margin-top: 21px;
      padding: 0;
      gap: 5px;
      display: flex;
      flex-direction: column;
    
    .item{
                
    a{
      font-family: 'IBM Plex Mono';
      font-weight: 400;
      font-size: 16px;
      line-height: 87%;
      letter-spacing: -0.04em;
      cursor: pointer;
    }
    }
    }
    }
  }


  .contacts{
    display: flex;
    gap: 15px;
  }

  .menu_list, 
  .item,
  a{
    text-decoration: none;
    list-style-type: none;
    cursor:pointer;
    color:#000000;
  }

@media(min-width:480px) {
  .footer{
    border: 2px solid #000000;
  }

  .menu{
    
    &_list{
      flex-direction: row;
      text-align: center;
      gap: 30px;

    .submenu_list{
      justify-content: center;
      align-items:center;
      text-align: center;
    }
    }      
  }
  
  .contacts{
    gap: 30px;
  }
}

  @media(min-width:768px) {
  .footer{
        
    &_inner{
      flex-direction: row;
      padding: 10px 30px 30px;
    
    .logo{
      align-self: flex-start;
    img{
      width: 50px;
      height: 50px;    
    }
    }
    }
  }

  .menu{
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-self:center;
  }
    
    .contacts{
      display: flex;
      gap: 10px;
    }

  }

@media(min-width:1000px) {
 
  .footer{
        
    &_inner{
           
    .logo{
      align-self: center;
    }
    }
  }
  
  .menu{
  
    &_list{
      gap: 130px;
    }
  }

  .contacts{
    display: flex;
    gap: 36px;
  }
}

@media(min-width:1200px){
  .footer{
        
    &_inner{
        
    .logo{
    
    img{
      width: 92px;
      height: 92px;    
    }
    }
    }
  }
}

@media(min-width:1440px){
  .footer{
    
    &_inner{
      padding: 50px;
      justify-content: space-between;
    }
  }

  .menu{

    &_list{
      gap: 95px;
      
    .submenu_list{
      gap:8px;
    }
    }
  }

  .contacts{
    gap: 40px;
  }
}
  
 </style>
