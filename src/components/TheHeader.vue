<template>
  <header class="header">
    <div class="header_inner">
      <a href="/" class="logo">
        <img src="@\assets\images\Logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul :class="['menu_list', {'active': isActive}]">
          <li class="item1"><a href="#Service">Service</a></li>
          <li class="item2"><a href="#API">API</a></li>
          <li class="item3"><a href="#Company">Company</a></li>
          <li class="item4"><a href="#">Pricing</a></li>
        </ul>
      </nav>
      <div class="button"><a href="#"><Button/></a></div>
      <div class="burger"><Burger :is-active="isActive" @on-burger="toggle($event)"/></div>
      </div>
  </header>
</template>


<script setup>
import Button from '@/components/Button.vue'
import Burger from '@/components/UI/Burger.vue'
import {ref} from 'vue'

let isActive = ref(false)

function toggle(flag){
  isActive.value = flag;
  isActive.value === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
}
</script>


<style lang="scss" scoped>

.header {
  margin: 10px 10px 10px 10px;
  position: sticky;
  top:0;
  background-color: #FFF5EA;
  
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
    cursor: pointer;
  }

      
  &_list{
    display: flex;
    flex-direction: column;
    position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height:100%;
	  padding: 0;
    margin: 0;
    background: rgb(247, 244, 244);
	  transform: translateX(100%);
	  transition: transform 0.3s; 
    justify-content: center;
    gap: 25px; 
 
  li{
    list-style-type: none;
    align-self:center; 
    font-size: 24px; 
  }
  
  a{
    color: black;
    padding: 5px 130px 5px 130px;
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

@media (min-width:480px) {

.header {
  margin: 10px 10px 10px 10px;
  position: sticky;
  top:0;
  background-color: #FFF5EA;
  
  &_inner{  
    justify-content: end;
  
  .logo{
    margin-right: auto;
  }
  }
}

.burger{
  display: none;
}
 
.menu{
  padding-right: 20px;
 
  &_list{
    flex-direction: row;
    position: relative;
    transform: translateX(0);
    background: #FFF5EA;
    gap: 5px; 
  
  li{
    padding-right: 0;
    font-size: 16px; 
  }
  
  a{
    padding: 5px;
  }
  }
}

.button{
  margin:0;
}
}

@media (min-width:768px) {
.header {
  margin-left: 63px;
  margin-right: 41px;
  
  &_inner{
    margin-top: 70px;
    justify-content: end;
    
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
  gap: 25px;        
  }
}
}

@media (min-width:1000px) {

.header {
  margin-right: 71px;
}

.menu{
  padding-right:0;

  &_list{
    gap: 0;
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

@media(min-width: 1440px) {

.menu{
    
  a{
    &:hover {
    background-color: #FFFB47;
    }
  }  
}
}

</style>
