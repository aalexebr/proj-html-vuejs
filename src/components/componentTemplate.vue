<script>
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },
    components: {

    },
    methods:{
		getImgPath: function(imgPath){
        return new URL(`../assets/xxx/${imgPath}`, import.meta.url).href;
      },
    },
}
</script>

<template>
<div>
  templae
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
</style>
