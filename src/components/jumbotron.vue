<script>
import {store} from '../store'
export default{
    data(){
      return{
        store,
        sliderPath:[
          'src/assets/img/slider/slider-autocar-5.jpg',
          'src/assets/img/slider/slider-autocar-6.jpg'
        ],
        count:0
      }
    },
    methods:{
		nextSlide(){
			this.count++
			if(this.count> this.sliderPath.length-1){
				this.count=0
			}
		},
		prevSlide(){
			this.count--
			if(this.count< 0){
				this.count=this.sliderPath.length-1
			}
		}
    }
}
</script>

<template>
<div class="jumbotron pos-relative">
	<div @click="prevSlide"
		class="slider-button pos-absolute prev">
		<font-awesome-icon icon="fa-solid fa-chevron-left" class="icon"/>
	</div>
	<div @click="nextSlide"
		class="slider-button pos-absolute next">
		<font-awesome-icon icon="fa-solid fa-chevron-right" class="icon"/>
	</div>
	<div class="container pos-absolute">
		<div class="jumbo-info pos-absolute">
			<h1 class="capitalize">
				buy and sell your car at its value
			</h1>
			<p>
				Find the right price and dealer
			</p>
			<a href="#" class="button capitalize">
				<span>
					more info &#8594
				</span>
			</a>
		</div>
		<div class="circle pos-absolute">
			<div class="dot pos-absolute"></div>
		</div>
	</div>
	
  <img :src="sliderPath[count]" alt="">
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.jumbotron{
    height: 450px;
	color: white;
	.container{
		right: 0;
		left: 0;
		height: 450px;
		max-width: 1100px;
		.jumbo-info{
			width: calc(100% / 3);
			top: 50%;
			transform: translate(0, -50%);
			& *{
				margin-bottom: 10px;
			}
		}
	}
    img{
        object-fit: cover;
        height: 100%;
    }
    .slider-button{
        color: white;
        display: inline-block;
		padding: 10px;
        z-index: 1;
		border-radius: 10px;
		cursor: pointer;
		
		&.prev{
			left: 40px;
			top: 50%;
			transform: translate(0, -50%);
		}
		&.next{
			right: 40px;
			top: 50%;
			transform: translate(0, -50%);
		}
    }
	.circle{
		color: grey;
		border: 2px solid white;
		height: 40px;
		width: 40px;
		text-align: end;
		border-radius: 40px;
		bottom: 40px;
		right: 0;
				.dot{
			height: 2px;
			width: 2px;
			border: 2px solid grey;
			border-radius: 2px;
			top: 50%;
			left: 75%;
			transform: translate(-50%, -50%);
		}
	}
}

</style>
