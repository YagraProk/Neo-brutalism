<template>
  <footer class="footer" id="countries">
    <div class="footer_inner">
      <a href="/" class="logo">
        <img src="@\assets\images\Logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul class="menu_list">
          <li class="block1"><a class="head_submenu" href="#Service">Service</a>
                    <ul class="submenu_list">
			            <li class="item"><a href="#">Personal</a></li>
			            <li class="item"><a href="#">Business</a></li>
			            <li class="item"><a href="#">Enterprise</a></li>
                    </ul>
          </li>
          <li class="block2"><a class="head_submenu" href="#API">API</a>
                    <ul class="submenu_list">
			            <li class="item"><a href="#">Developer contact</a></li>
			            <li class="item"><a href="#">Documentation</a></li>
			        </ul>
          </li>
          <li class="block3"><a class="head_submenu" href="#Company">Company</a>
                    <ul class="submenu_list">
			            <li class="item"><a href="#">About us</a></li>
			            <li class="item"><a href="#">Careers</a></li>
			            <li class="item"><a href="#">Investors</a></li>
                      
			        </ul>
          </li>
        </ul>
      </nav>
      <div class="contacts">
        <a class="contacts_in" href="https://www.instagram.com/"> 
            <img src="@\assets\images\instagram.svg" alt="Instagram link">
        </a>
        <a class="contacts_lin" href="https://ru.linkedin.com/">
            <img src="@\assets\images\linkedin.svg" alt="Linkedin link">
        </a>
        <a class="contacts_twit" href="https://twitter.com/">
            <img src="@\assets\images\twitter.svg" alt="Twitter link">
        </a>
      </div>
    </div>
  </footer>
  
</template>


<script setup>

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
      
    .logo{

    img{
      width: 40px;
      height: 40px;    
    }
    }
    }
  }

  .menu{
    margin: 20px auto;

    &_list{
      display: flex;
      flex-direction: column;
      padding: 0;
      text-align: center;
        
    .head_submenu{
      font-family: 'IBM Plex Mono';
      font-weight: 700;
      font-size: 24px;
      line-height: 87%;
      letter-spacing: -0.04em;
      cursor: pointer;
    }
    
    .submenu_list{
      margin-top: 21px;
      padding: 0;
    
    .item{
      margin-bottom: 5px;
          
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
             
    .block1{
      margin-bottom: 25px;
    }

    .block2{
      margin-bottom: 25px;
    }

    .block3{
      margin-bottom: 25px;
    }
    }

  }


  .contacts{
    display: flex;
    gap: 15px;
    margin: auto;
  }

  .menu_list, 
  .item,
  a{
    text-decoration: none;
    list-style-type: none;
    cursor:default;
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
    
    .logo{

    img{
      width: 92px;
      height: 92px;    
    }
    }
    }
  }

  .menu{
    display: flex;

    &_list{
      margin-top: 0;
      display: flex;
      flex-direction: row;
    }
  }
    
    .contacts{
      display: flex;
      margin: auto;
      gap: 10px;
    }

  }

  @media(min-width:1000px) {
 
  .menu{
    padding-top: 52px;

    &_list{
      gap: 130px;
    }
  }

  .contacts{
    display: flex;
    padding-top: 0;
    gap: 36px;
  }
}

@media(min-width:1440px){
  .footer{
    
    &_inner{
      padding: 52px 81px 48px 62px;
      justify-content: space-between;
        
    .logo{
      padding-right: 180px;
    }
    }
  }

  .menu{

    &_list{
      gap: 30px;
      
    .submenu_list{
      margin-top: 15px;
    
    .item{
      margin-bottom: 8px;
    }
    }
    .block1{
      margin-right: 64px;
    }

    .block2{
      margin-right: 64px;
    }
    }
  }

  .contacts{
    gap: 0px;
    
    &_in{
      margin-right: 40px;
    }

    &_lin{
      margin-right: 40px;
    }
  }
}
  
 </style>
