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
      padding: 10px 10px 10px 10px;
      
    .logo{

    img{
      width: 40px;
      height: 40px;    
    }
    }
    }
  }

  .menu{
    margin: auto;

    &_list{
      display: flex;
      flex-direction: column;
        
    .head_submenu{
      margin-left: 30px;
      text-align: left;
      font-family: 'IBM Plex Mono';
      font-weight: 700;
      font-size: 24px;
      line-height: 87%;
      letter-spacing: -0.04em;
      cursor: pointer;
    }
    
    .submenu_list{
      margin-top: 21px;
    
    .item{
      padding-bottom: 5px;
    
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
      padding-bottom: 25px;
    }

    .block2{
      padding-bottom: 25px;
    }

    .block3{
      padding-bottom: 25px;
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
      margin-top: 0;
      flex-direction: row;
      text-align: center;
      gap: 30px;

      .head_submenu{
        margin-left: 0;
      }

    .submenu_list{
      padding-left: 0;  
      justify-content: center;
      align-items:center;
      text-align: center;
    }
    }      
  }
  
  .contacts{
    margin-top: 0;
    gap: 30px;
  }
}

  @media(min-width:768px) {
  .footer{
    margin-top: 20px;
    
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
              
    .submenu_list{
      margin-left: 0px;
      padding: 0;
    }
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
      padding-bottom: 8px;
    }
    }
    .block1{
      padding-right: 64px;
    }

    .block2{
      padding-right: 64px;
    }
    }
  }

  .contacts{
    gap: 0px;
    
    &_in{
      padding-right: 40px;
    }

    &_lin{
      padding-right: 40px;
    }
  }
}
  
 </style>
