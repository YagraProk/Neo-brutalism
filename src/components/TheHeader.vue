<script setup>
import Button from '/src/components/Button.vue'
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a href="/" class="logo">
        <img src="@\assets\images\Logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list-item item1">Service<img src="@\assets\images\Vector.svg" alt="Arrow for submenu">
              <ul class="drop">
			                <li class="dropmenu"><a href="#">Text 1</a></li>
			                <li class="dropmenu"><a href="#">Text 2</a></li>
			                <li class="dropmenu"><a href="#">Text 3</a></li>
                      <li class="dropmenu"><a href="#">Text 4</a></li>
			        </ul>
          </li>
          <li class="menu__list-item item2">API <img src="@\assets\images\Vector.svg" alt="Arrow for submenu">
            <ul class="drop">
			                <li class="dropmenu"><a href="#">Text 1</a></li>
			                <li class="dropmenu"><a href="#">Text 2</a></li>
			                <li class="dropmenu"><a href="#">Text 3</a></li>
                      <li class="dropmenu"><a href="#">Text 4</a></li>
			        </ul></li>
          <li class="menu__list-item item3">Company <img src="@\assets\images\Vector.svg" alt="Arrow for submenu">
            <ul class="drop">
			                <li class="dropmenu"><a href="#">Text 1</a></li>
			                <li class="dropmenu"><a href="#">Text 2</a></li>
			                <li class="dropmenu"><a href="#">Text 3</a></li>
                      <li class="dropmenu"><a href="#">Text 4</a></li>
			        </ul></li>
            <li class="menu__list-item item4"><a href="Pricing.html">Pricing</a></li>
            <li class="menu__list-item"><a href="#"><Button/></a></li>  
          </ul>  
      </nav>
    </div>
  </header>
  
</template>



<style scoped>

.header {
  margin: 60px 71px 80px 63px;
}
  .header__inner{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    max-width: 1512px;
    align-items: center;
    margin: auto;
  }

  .logo{
    cursor: default;
  }

  .menu {
    max-width: 718px;
  }

.menu__list{
  display: flex;
  justify-content: space-between;
}

.menu__list-item{
  list-style: none;
  cursor: pointer;
}

li img{
  padding-left: 10px;
}

a{
  text-decoration: none;
  color: black;
}

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

.drop{
  padding: 20px 50px;
  background-color: white;
  position: absolute;
  margin-left: -40px;
  border: 1px solid black;
  display: none;
}
 .dropmenu {
  background-color: white;
  list-style: none;
  text-align: center;
  padding-top: 5px;
}

.dropmenu a {
background-color: white;
}
.item1:hover .drop{
display: block;
} 

.item2:hover .drop{
display: block;
} 

.item3:hover .drop{
display: block;
} 

@media (max-width: 900px) {
.item1{
  padding-right: 40px;
}

.item2{
  padding-right: 46px;
}

.item3{
  padding-right: 35px;
}

.item4{
  padding-right: 25.5px;
}
}

@media (max-width: 760px) {
  
  .header{
    margin-left: 20px;
  }

  .header__inner{
    display: flex;
    justify-content: space-around;
  }
  .menu__list{
    flex-direction: column;
    gap: 20px;
  }

  .drop{
  padding: 20px 50px;
  background-color: white;
  position: absolute;
  margin-left: 50px;
  border: 1px solid black;
  display: none;
}
}

</style>
