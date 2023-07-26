<script>
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },
    methods:{
		getImgPath: function(imgPath){
        return new URL(`../assets/img/testimonials/${imgPath}`, import.meta.url).href;
      },
    },
	props:{
		i:Number
	}

}
</script>

<template>
	<div class="card pos-relative">
		<p class="text-center z-index-one pos-relative">
			{{ store.Testimonials[i].text }}
		</p>
		<div class="img m-auto z-index-one pos-relative">
			<img :src="getImgPath(store.Testimonials[i].img)" alt="">
		</div>
		<p class="text-center capitalize z-index-one pos-relative">
			{{ store.Testimonials[i].name }}
		</p>
		<font-awesome-icon icon="fa-solid fa-quote-right" size="4x" class="icon pos-absolute"/>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
.card{
	background-color: white;
	padding: 40px 20px;
	border-radius: 5px;
	color: black;
	.img{
		width: 75px;
	}
	& *{
		margin-bottom: 20px;
	}
	.icon{
		color: #dfdfdf;
		z-index: 0;
		top: 25%;
		left: 50%;
		transform: translate(-50%,0);
		rotate: 30deg;
	}
	.z-index-one{
		z-index: 1;
	}
}
</style>