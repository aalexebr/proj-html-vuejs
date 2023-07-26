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
        <div class="circle pos-relative m-auto">
            <font-awesome-icon icon="fa-regular fa-thumbs-up" size="3x" class="icon pos-absolute"/>
        </div>
        <h3 class="text-center capitalize">
            recent articles
        </h3>
        <p class="text-center">
            Useful info about car.
        </p>
        <div class="row">
            <div class="col-3" v-for="(article,i) in store.Articles" :key="i">
                <ArticleCard :i="i"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
section{
    padding: 40px 0 40px 0;
    .circle,h3{
        margin-bottom: 10px;
    }
}
.col-3{
    padding: 20px;
}
.circle{
    height: 75px;
    width: 75px;
    background-color: black;
    color: white;
    border-radius: 9999px;
    .icon{
        top: 48%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>