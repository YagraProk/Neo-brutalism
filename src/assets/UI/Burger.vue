<script setup>
    function toggleBurger(){
        document.querySelector('.burger_figure').classList.toggle('active');
        document.querySelector('.menu_list').classList.toggle('active');
	// menuBtn.classList.toggle('active');
	// menu.classList.toggle('active');
    }
</script>

<template>
    <div class="burger">
        <div class="burger_figure" @click="toggleBurger">
            <span></span>
		    <span></span>
		    <span></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.burger {
    display: flex;
	justify-content: flex-end;
    border:none;
    background-color:#FFF5EA;
        
        &_figure{
            width: 35px;
	        height: 40px;
	        position: relative;
	        z-index:2;
	        overflow: hidden;
            
                span{width: 30px;
	                height: 2px;
	                position: absolute;
	                top: 50%;
	                left: 50%;
	                transform: translate(-50%, -50%);
	                background-color: black;
	                transition: all 0.5s;
                        
                        &:nth-of-type(2){
                            top: calc(50% - 8px);
                        }
                        
                        &:nth-of-type(3){
	                        top: calc(50% + 8px);
                        }

                }
        }
        
    
}    

.burger_figure.active span{
    &:nth-of-type(1) {
        display: none;
    }
    
    &:nth-of-type(2) {
        top: 50%;
        transform: translate(-50%, 0%) rotate(45deg);  
    }
    
    &:nth-of-type(3) {
        top: 50%;
        transform: translate(-50%, 0%) rotate(-45deg); 
    }    
}

</style>




















