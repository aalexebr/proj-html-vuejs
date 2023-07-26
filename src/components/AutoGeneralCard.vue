<script>
import {store} from '../store'
export default{
    data(){
      return{
        store,
		flagHeart:false
      }
    },
    methods:{
        getImgPath: function(imgPath){
        return new URL(`../assets/img/auto_cards/${imgPath}`, import.meta.url).href;
      },
	  liked(){
		this.flagHeart = !this.flagHeart
	  }
    },
    props:{
        i: Number
      }

}
</script>

<template>
<div class="card pos-relative" @click="liked()">
	<img :src="getImgPath(store.ListedAutos[i].img)" alt="">
	<span class="name capitalize">
		{{ store.ListedAutos[i].name   }}  <font-awesome-icon icon="fa-solid fa-circle-check"/>
	</span>
	<span class="type capitalize">
		{{ store.ListedAutos[i].type }}
	</span>
	<span class="capitalize">
		<font-awesome-icon icon="fa-solid fa-dollar-sign"/> {{  store.ListedAutos[i].price }}
	</span>
	<span class="capitalize">
		<font-awesome-icon icon="fa-solid fa-car"/>  {{   store.ListedAutos[i].brand }}
	</span>
	<span class="capitalize">
		<font-awesome-icon icon="fa-solid fa-gas-pump"/> {{ store.ListedAutos[i].fuelType }}
	</span>
	<font-awesome-icon icon="fa-solid fa-heart" class="icon pos-absolute d-none"
		 :class="{'display':flagHeart}"/>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.card{
    width: 100%;
	padding: 5px;
	cursor: pointer;
	background-color: white;
	.name,.type{
		display: block;
	}
	span{
		margin: 5px;
	}
	.icon{
		color: grey;
		bottom: 10px;
		right: 10px;
	}
}
</style>
