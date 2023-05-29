<template>
  <header class="header">
    <div class="header_inner">
      <a href="/" class="logo">
        <img src="@\components\main\ui\logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul :class="['menu_list', {'active': isActive}]">
         <li class="item" v-for="({title, link}, index) in NAV_LIST" :key="index" @click="isActive = false">
          <router-link :to="link">{{title}}</router-link>
          <!-- <router-link :to="{ name: 'home', hash: { link } }">{{title}}</router-link> -->
          <!-- <a :href="link">{{title}}</a> -->
        </li>
        </ul>
      </nav>
      <div class="button"><a href="#"><Button/></a></div>
      <div class="burger"><Burger :is-active="isActive" @on-burger="toggle($event)"/></div>
      </div>
  </header>
</template>


<script setup>
import Button from '@/components/main/ui/Button.vue'
import Burger from '@/components/main/ui/Burger.vue'
import {ref} from 'vue'
import NAV_LIST from '@/static/nav.js' 

let isActive = ref(false)

function toggle(flag){
  isActive.value = flag;
  document.body.style.overflow = isActive.value ? 'hidden' : '';
}

</script>


<style lang="scss" scoped>

.header {
  padding: 10px 10px 10px 10px;
  position: sticky;
  top:0;
  background-color: #FFF5EA;
  margin-bottom: 30px;
    
  &_inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    box-sizing: border-box;
   
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
    background: #54BF58;
	  transform: translateX(100%);
	  transition: transform 0.3s; 
    justify-content: center;
    gap: 45px; 
 
  li{
    list-style-type: none;
    align-self:center; 
    font-size: 24px; 
    width: 100%;
    height: auto;
    text-align: center;
  }
  
  a{
    color: black;
    padding: 15px 0;
    display: block;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    font-weight: 700;
  }
  }
}

.button{
  
  a{
    text-decoration: none;
  }

  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.menu_list.active{
  transform: translateX(0);
}

@media (min-width:480px) {

.header {
  padding: 10px 10px 10px 10px;
  position: sticky;
  top:0;
  background-color: #FFF5EA;
  
  &_inner{  
    justify-content: end;
  
  .logo{
    flex-grow: 1;
  }
  }
}

.burger{
  display: none;
}
 
.menu{
  padding-right: 10px;
 
  &_list{
    flex-direction: row;
    position: relative;
    transform: translateX(0);
    background: #FFF5EA;
    gap: 10px; 
  
  li{
    padding-right: 0;
    font-size: 16px; 
  }
  
  a{
    padding: 5px;
    text-decoration: none;
    font-weight: 400;
  }
  }
}

.button{
  margin:0;
  flex-grow: 0;
}
}

@media (min-width:768px) {
.header {
  padding-right: 65px;
  padding-left: 65px;
  margin-bottom: 70px;
  
  &_inner{
        
  .logo{
      
  img{
    width: 50px;
    height: 50px;
  }
  }
  }
}

.menu{
  
  padding-right: 20px;

  &_list{
    padding-right: 0;
    gap: 25px;        
  }
}
}

@media (min-width:1000px) {

.header {
  padding-right: 70px;
  padding-left: 70px;
}

.menu{
  padding-right:0;

  &_list{
    gap:70px;

  .item:last-child{
    padding-right: 45.5px;
  }
  }
}
}

@media(min-width: 1200px){

  .header {
    
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

@media(min-width: 1440px) {

  .header {
    
    &_inner{
      margin: auto; 
    }
  }
     
  .menu{
    
    a{
      &:hover {
      background-color: #FFFB47;
      }
    }  
  }
}

</style>
