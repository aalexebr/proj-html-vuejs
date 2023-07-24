<script>
import {store} from '../store'
import Jumbotron from './jumbotron.vue'

export default{
    data(){
      return{
        store
      }
    },
    components: {
      Jumbotron,
    }
}
</script>

<template>
<main>
	<Jumbotron/>
    MAIN
</main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

</style>