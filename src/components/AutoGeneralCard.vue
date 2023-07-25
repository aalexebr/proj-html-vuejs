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
        return new URL(`../assets/img/auto_cards/${imgPath}`, import.meta.url).href;
      },
    },
    props:{
        i: Number
      }

}
</script>

<template>
<div class="card">
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
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.card{
    width: 100%;
	padding: 5px;
	// margin-bottom: 5px;
	background-color: white;
	.name,.type{
		display: block;
	}
	span{
		margin-right: 5px;
	}
}
</style>
