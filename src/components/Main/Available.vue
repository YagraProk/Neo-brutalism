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
            
    &_content{
        display: flex;
        flex-direction: column;

    a{
        text-decoration: none;
        color: #000;  
        text-decoration: underline;
        text-decoration-skip-ink: none;
    }
    
    .title{
        text-align: center;
        margin-bottom: 0;
    }

    .text{
        display: flex;
        text-align: center;
        justify-content: center;
        margin-bottom:0;
                            
    img{
        width: 5%;
        transform: rotate(90deg);
        z-index: -1;
    }
    }
    }

    &_img{
        padding-top: 10px;
        max-width: 70%;
        height: auto;
        margin: auto;
    }
}

   
@media(min-width: 768px){
.available{

    &_content{

    .text{
        display: block;
                
    img{
        width: 20px;
        height: auto;
        transform: rotate(90deg);
    }
    }
    }

    &_img{
        padding-top: 10px;
        max-width: 70%;
        height: auto;
        margin: auto;
    }
}
}

@media(min-width: 1000px){
.available{
    margin-top: 115px;
    flex-direction: row;
        
    &_content{
        display: flex;
        flex-direction: column;
        align-items:end;
        margin-right: 20px;

    .title{
        text-align: end;
        margin-bottom: 26px;
    }

    .text{
        text-align: right;
        padding-bottom: 47px;
    
    img{
        width: 16px;
        height: 8px;
        transform: rotate(0deg);
        padding-bottom: 3px;
    }
    }
    }

    &_img{
        padding-top: 10px;
        max-width: 70%;
        height: auto;
        margin: auto;
    }
}
}

@media(min-width: 1440px){
.available{
    margin-top: 215px;
        
    &_content{

    .title{
        margin-bottom: 36px;
    }

    .text{
        padding-bottom: 57px;
    }
    }
}
}        
</style>




















