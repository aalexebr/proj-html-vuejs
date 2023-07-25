<script>
import {store} from '../store'
import TestimonialCard from './TestimonialCard.vue'
export default{
    data(){
      return{
        store
      }
    },
    components:{
        TestimonialCard
    }
}
</script>

<template>
<section class="testimonials">
    <div class="container">
        <div class="text-center">
            icon
        </div>
        <h3 class="capitalize text-center">
            what are our custmers saying?
        </h3>
        <p class="text-center ">
            opinions from our happy customers
        </p>
        <div class="row">
            <TestimonialCard class="col-3" :i="i"
                v-for="(card,i) in store.Testimonials" :key="i"/>
        </div>
        <div class="scroll row justify-center">
            <div class="black "></div>
            <div class="grey "></div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.testimonials{
    background-image: url('../assets/img/comment-bg-autocar.jpg'); 
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    // height: 300px;
    color: white;
    padding: 40px;
    .black,.grey{
        display: inline-block;
        margin: 2px;
    }
    .black{
        width: 40px;
        border: 2px solid black;
        border-radius: 5px;
    }
    .grey{
        width: 20px;
        border: 2px solid rgb(94, 94, 94);
        border-radius: 5px;

    }
    .col-3{
        margin: 20px 0;
    }
}
</style>
