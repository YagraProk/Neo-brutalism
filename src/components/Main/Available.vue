<template>
    <div class="available" id="API">
          <div class="available_content">  
          <h1 class="title">
                Globally Available!
            </h1>
            <p class="text">
                We are expanding to over 110+ countries    
            </p>
            <a href="#countries">
                <p class="text"> 
                See supported countries
                <img src="@\assets\images\Vector-arrow.svg" alt="Arrow to globe image">
                </p>
            </a>
            </div>
            <img class="available_img" src="@\assets\images\Globe.png" alt="Globe image" >
    </div>
</template>


<script setup>

</script>


<style lang="scss" scoped>
.available{
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    gap: 20px;
            
    &_content{
        display: flex;
        flex-direction: column;
        gap: 15px;
    
    a{
        text-decoration: none;
        color: #000;  
        text-decoration: underline;
        text-decoration-skip-ink: none;
    }
    
    .title{
        text-align: center;
        margin: 0;
    }

    .text{
        display: flex;
        text-align: center;
        justify-content: center;
        margin: 0;
                            
    img{
        max-width: 5%;
        transform: rotate(90deg);
        z-index: -1;
    }
    }
    }

    &_img{
        max-width: 70%;
        align-self: center;
    }
}

   
@media(min-width: 768px){
.available{
    margin-bottom: 60px;
    gap: 40px;

    &_content{
        gap: 35px;

    .text{
        display: block;   
        line-height: 26px; 
        
    img{
        transform: rotate(90deg);
    }
    }
    }

    &_img{
        max-width: 70%;
    }
}
}

@media(min-width: 1000px){
.available{
    flex-direction: row;
        
    &_content{
        display: flex;
        flex-direction: column;
        align-items:center;
        gap: 26px;
        
    .title{
        text-align: center;
    }

    .text{
        text-align: center;
        margin-bottom: 47px;
           
    img{
        width: 16px;
        height: 8px;
        transform: rotate(0deg);
        margin-bottom: 3px;
    }
    }
    }

    &_img{
        max-width: 70%;
    }
}
}

@media(min-width: 1440px){
.available{
    margin-bottom: 80px;

    &_content{
        align-items: end;

    .title{
        margin-bottom: 36px;
    }

    .text{
        margin-bottom: 57px;
    }
    }
}
}        
</style>




















