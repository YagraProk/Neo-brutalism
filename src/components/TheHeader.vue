<script setup>
import Button from '/src/components/Button.vue'
import Burger from '@/assets/UI/Burger.vue'
</script>

<template>
  <header class="header">
    <div class="header_inner">
      <a href="/" class="logo">
        <img src="@\assets\images\Logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul class="menu_list">
          <li class="item1"><a href="#Service">Service</a><img src="@\assets\images\Vector.svg" alt="Arrow for menu link"></li>
          <li class="item2"><a href="#API">API</a> <img src="@\assets\images\Vector.svg" alt="Arrow for menu link"></li>
          <li class="item3"><a href="#Company">Company</a> <img src="@\assets\images\Vector.svg" alt="Arrow for menu link"></li>
          <li class="item4"><a href="#">Pricing</a></li>
        </ul>
      </nav>
      <div class="button"><a href="#"><Button/></a></div>
      <div class="burger"><Burger/></div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.header {
  margin: 10px 10px 10px 10px;
    &_inner{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: auto;
      .logo{
        cursor: default;
          img{
            width: 40px;
            height: 40px;
          }
      }
    }
}

.menu{
  display: flex;
    a{
      text-decoration: none;
    }
      
      &_list{
        display: flex;
        flex-direction: column;
        position: fixed;
	      top: 0;
	      left: 0;
	      width: 100%;
	      height:auto;
	      padding: 15px;
        background: rgb(247, 244, 244);
	      transform: translateX(100%);
	      transition: transform 0.5s; 
          li{
            list-style-type: none;
            align-self:center;  
              img{
                padding-left: 5px;
              }
          }
          a{
            color: black;
            }
      }
}

.button{
  a{
    text-decoration: none;
  }
  margin: auto;
}

.menu_list.active{
  transform: translateX(0);
}

@media (min-width:479px) {
  
.burger{
    display: none;
}
 
.menu{
  &_list{
    display: flex;
    flex-direction: row;
    padding: 10px;
    position: relative;
    transform: translateX(0);
    background: #FFF5EA;
      li{
        padding-right: 10px;
        img{
          padding-left: 3px;
        }
      }
  }
}

.button{
  margin:0;
}
}

@media (min-width:767px) {
.header {
  margin-left: 63px;
  margin-right: 71px;
    &_inner{
      margin-top: 70px;
      justify-content: center;
    
      .logo{
        margin-right: auto;
          img{
            width: 92px;
            height: 92px;
          }
      }
  }
}

.menu{
      
  &_list{
  padding-right: 0;
    li{
    
      img{
        padding-left: 10px;
      }
    }
        
  }
}
}

@media (min-width:999px) {

.menu{
 
  &_list{
      
    .item1{
      padding-right: 83.5px;
    }

    .item2{
      padding-right: 76px;
    }

    .item3{
      padding-right: 72px;
    }

    .item4{
      padding-right: 45.5px;
    }
  }
}
}

</style>
