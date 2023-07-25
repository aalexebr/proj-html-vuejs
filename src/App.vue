<script>
// store
import {store} from './store'
import componentTemplate from './components/componentTemplate.vue'
import HeaderComp from './components/HeaderComponent.vue'
import MainComp from './components/MainComponent.vue'
import FooterComp from './components/FooterComponent.vue'



export default{
    data(){
      return{
        store
      }
    },
    components: {
      HeaderComp,
      MainComp,
      FooterComp
    },
    methods:{
        getImgPath: function(imgPath){
        return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
      },
    }
}
</script>

<template>
  <HeaderComp/>
  <MainComp/>
  <FooterComp/>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
@use './assets/scss/utilities.scss' as *;
</style>
