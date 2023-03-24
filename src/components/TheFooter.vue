<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer_inner">
      <a href="/" class="logo">
        <img src="@\assets\images\Logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul class="menu_list">
          <li class="block1"><a class="head_submenu" href="#">Service</a>
                    <ul class="submenu_list">
			            <li class="item"><a href="#">Personal</a></li>
			            <li class="item"><a href="#">Business</a></li>
			            <li class="item"><a href="#">Enterprise</a></li>
                    </ul>
          </li>
          <li class="block2"><a class="head_submenu" href="#">API</a>
                    <ul class="submenu_list">
			            <li class="item"><a href="#">Developer contact</a></li>
			            <li class="item"><a href="#">Documentation</a></li>
			        </ul>
          </li>
          <li class="block3"><a class="head_submenu" href="#">Company</a>
                    <ul class="submenu_list">
			            <li class="item"><a href="#">About us</a></li>
			            <li class="item"><a href="#">Careers</a></li>
			            <li class="item"><a href="#">Investors</a></li>
                      
			        </ul>
          </li>
        </ul>
      </nav>
      <div class="contacts">
        <a class="contacts_in" href="#"> 
            <img src="@\assets\images\instagram.svg" alt="Instagram link">
        </a>
        <a class="contacts_lin" href="#">
            <img src="@\assets\images\linkedin.svg" alt="Linkedin link">
        </a>
        <a class="contacts_twit" href="#">
            <img src="@\assets\images\twitter.svg" alt="Twitter link">
        </a>
      </div>
    </div>
  </footer>
  
</template>



<style  lang="scss" scoped>

  .footer{
    max-width: 1512px;
    border: 2px solid #000000;
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

@media(min-width:479px) {
  .footer{
   
    &_inner{
      // display: flex;
      flex-direction: row;
    }
  }

  .menu{
    margin: auto;

    &_list{
      margin-top: 0;
    }
  }      
        
  .contacts{
    margin-top: 0;
  }
}

  @media(min-width:767px) {
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

  .menu{
    display: flex;

      &_list{
        margin-top: 0;
        display: flex;
      }
  }
    .contacts{
    margin-left: auto;
    }

  }

  @media(min-width:999px) {
    .footer{
    
      &_inner{
        flex-direction: row;
        align-items:center;
      }
    }

  .menu{

    padding-top: 52px;
      &_list{
        flex-direction: row;
          
          .submenu_list{
            margin-left: 30px;
            padding: 0;
          }
      }

  }

  .contacts{
    display: flex;
    padding-top: 79px;
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
