<script setup>

</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <a href="/" class="logo">
        <img src="@\assets\images\Logo.svg" alt="Logo">
      </a>
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list-item block1"><a class="head__submenu" href="#">Service</a>
                    <ul class="submenu__list">
			            <li class="submenu__list-item"><a href="#">Personal</a></li>
			            <li class="submenu__list-item"><a href="#">Business</a></li>
			            <li class="submenu__list-item"><a href="#">Enterprise</a></li>
                    </ul>
          </li>
          <li class="menu__list-item block2"><a class="head__submenu" href="#">API</a>
                    <ul class="submenu__list">
			            <li class="submenu__list-item"><a href="#">Developer contact</a></li>
			            <li class="submenu__list-item"><a href="#">Documentation</a></li>
			        </ul>
          </li>
          <li class="menu__list-item block3"><a class="head__submenu" href="#">Company</a>
                    <ul class="submenu__list">
			            <li class="submenu__list-item"><a href="#">About us</a></li>
			            <li class="submenu__list-item"><a href="#">Careers</a></li>
			            <li class="submenu__list-item"><a href="#">Investors</a></li>
                      
			        </ul>
          </li>
        </ul>
      </nav>
      <div class="contacts">
        <a class="contacts__in" href="#"> 
            <img src="@\assets\images\instagram.svg" alt="Instagram link">
        </a>
        <a class="contacts__lin" href="#">
            <img src="@\assets\images\linkedin.svg" alt="Linkedin link">
        </a>
        <a class="contacts__twit" href="#">
            <img src="@\assets\images\twitter.svg" alt="Twitter link">
        </a>
      </div>
    </div>
</footer>
  
</template>



<style scoped>

.footer{
    max-width: 1512px;
    border: 2px solid #000000;
    margin: 100px auto 50px auto;
}

.footer__inner{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 52px 81px 48px 62px;
    background-color: #FFFFFF;
}

.menu__list{
    display: flex;
    justify-content: space-between;      
}

.head__submenu{
    font-family: 'IBM Plex Mono';
    font-weight: 700;
    font-size: 24px;
    line-height: 87%;
    letter-spacing: -0.04em;
}

.menu__list-item, 
.submenu__list-item,
 a{
    text-decoration: none;
    list-style-type: none;
    cursor:default;
    color:#000000;
}

.submenu__list{
    padding-top: 15px;
}

.submenu__list-item{
padding-top: 8px;
font-family: 'IBM Plex Mono';
font-weight: 400;
font-size: 16px;
line-height: 87%;
letter-spacing: -0.04em;
}

.block1,
.block2{
    padding-right: 64px;
}

.contacts__in{
   padding-right: 40px;
}

.contacts__lin{
   padding-right: 40px;
}

@media (max-width: 900px){

  .footer{
    margin-top: 50px;
  }
  .footer__inner{
    padding: 20px;
    
}

  .block1,
  .block2{
    padding-right: 30px;
}

.contacts__in{
   padding-right: 20px;
}

.contacts__lin{
   padding-right: 20px;
}
}

@media (max-width: 760px){
  .footer__inner{
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .contacts{
    padding-top: 20px;
  }
}

@media (max-width: 550px){
  .block1,
.block2{
    padding-right: 10px;
}
}
</style>
