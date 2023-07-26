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
        return new URL(`../assets/img/news_auto/${imgPath}`, import.meta.url).href;
      },
    },
    props:{
        i:Number
    }
}
</script>

<template>
    <div class="card">
        <div class="img">
            <img :src="getImgPath(store.Articles[i].img)" alt="">
        </div>
        <p class="text-center">
            {{ store.Articles[i].date }} - {{ store.Articles[i].source }}
        </p>
        <h3>
            {{ store.Articles[i].title }}
        </h3>
        <p>
            {{ store.Articles[i].text.substr(0,50) }} [...]
        </p>
        <div class="text-center">
            <div class="button btn-no-border capitalize">
                more
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.card{
    padding:20px;
    // @include debug-one;
    border-radius: 5px;
    height: 100%;
    -webkit-box-shadow: 0px 0px 12px 5px #AAAAAA; 
    box-shadow: 0px 0px 12px 5px #AAAAAA;
    p,h3{
        margin-bottom: 15px;
    }
}
</style>
