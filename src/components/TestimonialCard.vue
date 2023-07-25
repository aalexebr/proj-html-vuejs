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
	<div class="card">
		<p>
			{{ store.Testimonials[i].text }}
		</p>
		<div class="img m-auto">
			<img :src="getImgPath(store.Testimonials[i].img)" alt="">
		</div>
		<p class="text-center">
			{{ store.Testimonials[i].name }}
		</p>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
.card{
	@include debug-one;
	padding: 30px 15px;
	.img{
		width: 75px;
	}
}
</style>