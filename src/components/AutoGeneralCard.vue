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
	<span class="name">
		{{ store.ListedAutos[i].name }}
	</span>
	<span class="type">
		{{ store.ListedAutos[i].type }}
	</span>
	<span>
		{{ store.ListedAutos[i].price }}
	</span>
	<span>
		{{ store.ListedAutos[i].brand }}
	</span>
	<span>
		{{ store.ListedAutos[i].fuelType }}
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
}
</style>
