<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
    <div class="worldwide">
            <img class="worldwide_img" src="@\assets\images\Time.png" alt="Time image" >
            <div class="worldwide_content">  
            <h1 class="title">
                Time is <span>money.</span> 
            </h1>
            <p class="text">
                Real-time transfer and payouts WORLDWIDE!
            </p>
            <div><Button/></div>
            </div>
    </div>
</template>

<style lang="scss" scoped>
    .worldwide{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items:center;
    
            &_img{
                width: 70%;
                height: auto;
            }

            &_content{
                display: flex;
                flex-direction: column;
                align-items:center;
                margin-bottom: 50px;
            }

                    .title{
                        text-align: center;
                        line-height: 1.2;
                        margin-bottom: 0px;
                            span{
                                background-color: #BAFFCD;
                                color: #37AB00;
                            }
                    }

                    .text{
                        text-align: center;
                        padding-bottom: 20px;
                    }
    }

@media(min-width:767px){
    .worldwide{
       
        &_img{
        }

        &_content{
            margin-bottom: 80px;
        }

            .title{

                span{
                }
            }

            .text{
                padding-top: 38px;
                padding-bottom: 128px;
            }
    }
}

@media(min-width:999px){
    .worldwide{
        flex-direction: row;
            
            &_img{
                width: 452px;
                height: 452px;
            }

            &_content{
                margin-bottom: 80px;
            }
    }
}

@media(min-width:1199px){
    .worldwide{
        margin-top: 100px;
        margin-bottom: 108px;
    
            &_img{
                padding-right: 65px;
            }

            &_content{
            }

                .title{
                    line-height: 87%;
                    margin-bottom: 36px;
                }

                .text{
                    margin-top:0;
                    padding-top: 0;
                    padding-bottom: 128px;
                }
                div{
                    margin-right: auto;
                }    
    }
}
</style>




















