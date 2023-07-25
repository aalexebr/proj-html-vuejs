<script>
import {store} from '../store'
import Jumbotron from './jumbotron.vue'
import SearchAutoComp from './SearchAutoComp.vue'
import AutoInfoComp from './AutoInfoComp.vue'
import TestimonialsComp from './TestimonialsComp.vue'
import ArticlesComp from './ArticlesComp.vue'

export default{
    data(){
      return{
        store
      }
    },
    components: {
      Jumbotron,
      SearchAutoComp,
      AutoInfoComp,
      TestimonialsComp,
      ArticlesComp
    }
}
</script>

<template>
<main>
	<Jumbotron/>
	<div class="container">
		<SearchAutoComp/>
    <AutoInfoComp/>
	</div>
  <TestimonialsComp/>
  <div class="container">
    <ArticlesComp/>
  </div>
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

</style>