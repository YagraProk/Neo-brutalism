<template>
    <div class="cheap" id="Service">
            <img class="cheap_img" src="@\assets\images\Cheap.png" alt="Transfer image">
            <h2 class="cheap_title">
                <div class="text">Cheap fees <strong>transfer</strong>, <br/>no fixed cents.</div>
            </h2>
    </div>
</template>


<script setup>

</script>


<style lang="scss" scoped>
    
.cheap{
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-top: 80px;
       
    &_img{
        max-width: 90%;
        height: auto;
        margin: auto;
    }

    &_title{
        margin: auto;
            .text{
                margin-top: 10px;
            }
    }
}

@media(min-width: 768px){
    
.cheap{
    margin-top: 100px;
          
    &_title{
       
    .text{
        margin-top: 20px;
    }
    }
}
}

@media (min-width:1000px){
 
.cheap{
    margin: 100px 10px 10px 10px;
           
    &_img{
        max-width: 70%;
        height: auto;
    }

    &_title{
        
    .text{
        margin-top: 20px;
    }
    }
}
}

@media (min-width:1440px){

.cheap{
    margin-bottom: 135px;
   
    &_img{
        max-width: 70%;
        height: auto;
    }

    &_title{
        padding-right: 37px;
        
    .text{
        margin-top: 20px;
    }
    }
}
}

</style>




















