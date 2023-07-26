<script>
import {store} from '../store'
export default{
    data(){
      return{
        store,
      }
    },
    components: {

    },
    methods:{
        getImgPath: function(imgPath){
        return new URL(`../assets/img/auto_type/${imgPath}`, import.meta.url).href;
      },
    },
    props:{
        i: Number,
    },

}
</script>

<template>
  <div class="auto-type-card text-center" >
    
      <img :src="getImgPath(store.AutoTypeList[i].img)" :alt="store.AutoTypeList[i].type">
    
    <span class="type capitalize">
      {{ store.AutoTypeList[i].type }}
    </span>
    <span class="capitalize listings">
      {{store.AutoTypeList[i].listings}} listings
    </span>
  </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.auto-type-card{
    // height: 60px;
    // @include debug-one;
    // width: 60px;
    background-color: white;
    padding: 5px;
    cursor: pointer;
    & *{
      padding-bottom: 5px;
    }
    .img{
        width: 100%;
    }
    span{
        display: block;
    }
    .listings{
      font-size: 0.85rem;
    }
}
</style>