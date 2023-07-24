<script>
import {store} from '../store'
import Jumbotron from './jumbotron.vue'
import SearchAutoComp from './SearchAutoComp.vue'

export default{
    data(){
      return{
        store
      }
    },
    components: {
      Jumbotron,
	  SearchAutoComp
    }
}
</script>

<template>
<main>
	<Jumbotron/>
	<div class="container">
		<SearchAutoComp/>
	</div>
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

</style>