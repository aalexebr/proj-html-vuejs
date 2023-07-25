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
			x
	</div>
	<div @click="nextSlide"
		class="slider-button pos-absolute next">
			x
	</div>
	<div class="container pos-absolute">
		<div class="jumbo-info pos-absolute">
			<h1>
				buy and sell your car at its value
			</h1>
			<p>
				find the right price and dealer
			</p>
			<a href="#">
				more info
			</a>
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
		.jumbo-info{
			width: calc(100% / 3);
			top: 50%;
			transform: translate(0, -50%);
			text-transform: capitalize;
		}
	}
    img{
        object-fit: cover;
        height: 100%;
        // padding: 50px;
    }
    .slider-button{
        color: white;
        display: inline-block;
        background-color: aqua;
        height: 20px;
        width: 20px;
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
}
</style>
