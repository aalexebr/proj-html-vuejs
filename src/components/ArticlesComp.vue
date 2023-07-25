<script>
import {store} from '../store'
import ArticleCard from './ArticleCard.vue'
export default{
    data(){
      return{
        store
      }
    },
    components: {
        ArticleCard
    },
    methods:{
		getImgPath: function(imgPath){
        return new URL(`../assets/xxx/${imgPath}`, import.meta.url).href;
      },
    },
}
</script>

<template>
    <section>
        <p>
            icon
        </p>
        <h3 class="text-center capitalize">
            recent articles
        </h3>
        <p class="text-center">
            Useful info about car.
        </p>
        <div class="row">
            <ArticleCard class="col-3" :i="i"
                v-for="(article,i) in store.Articles" :key="i"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
</style>