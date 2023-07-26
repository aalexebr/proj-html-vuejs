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
            <div class="icons">
                <font-awesome-icon icon="fa-regular fa-thumbs-up" size="3x" />
                <div>
                    <font-awesome-icon icon="fa-regular fa-star" v-for="e in 3"/>
                </div>
            </div>
            
        </div>
        <h3 class="capitalize text-center">
            what are our custmers saying?
        </h3>
        <p class="text-center ">
            Opinions from our happy customers
        </p>
        <div class="row">
            <div class="col-3" v-for="(card,i) in store.Testimonials" :key="i">
                <TestimonialCard :i="i"/>
            </div>
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

.container{
    max-width: 1100px;
}

.testimonials{
    background-image: url('../assets/img/comment-bg-autocar.jpg'); 
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    color: white;
    padding: 40px;
    .icons{
        margin-bottom: 15px;
    }
    p{
        font-size: 0.85rem;
    }
    h3,p{
        margin-bottom: 10px;
    }
    .black,.grey{
        display: inline-block;
        margin: 2px;
    }
    .black{
        width: 75px;
        border: 2px solid black;
        border-radius: 5px;
    }
    .grey{
        width: 40px;
        border: 2px solid rgb(188, 188, 188);
        border-radius: 5px;

    }
    .col-3{
        margin: 20px 0;
        padding: 10px;
    }
}
</style>
