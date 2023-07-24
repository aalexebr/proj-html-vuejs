<script>
import {store} from '../store'
import ListingCard from './ListingCard.vue'
export default{
    data(){
      return{
        store
      }
    },
    components: {
        ListingCard,
    }
}
</script>

<template>
<div class="container">
    <!-- search bar -->
    <div class="row">
        <div class="col-8">
            <input type="text" placeholder="Keywords" class="text-center">
        </div>
        <div class="col-8">
            <input type="text" placeholder="Location" class="text-center">
        </div>
        <div class="col-8">
            <select name="" id="" class="text-center">
                <option value="">All</option>
            </select>
        </div>
        <div class="col-8">
            <select name="" id="" class="text-center">
                <option value="">Brand</option>
            </select>
        </div>
        <div class="col-8">
            <select name="" id="" class="text-center">
                <option value="">Fuel </option>
            </select>
        </div>
        <div class="col-8">
            <select name="" id="" class="text-center">
                <option value="">Transmission</option>
            </select>
        </div>
        <div class="col-8">
            <select name="" id="" class="text-center">
                <option value="">Status</option>
            </select>
        </div>
        <div class="col-8">
            <button class="button">
                search
            </button>
        </div>
    </div>
    <div class="row">
            <ListingCard class="col-2" :i="i"
            v-for="(type,i) in store.AutoTypeList" :key="i"/>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.col-8{
    width: calc(100% / 8);
    @include debug-one;
    height: 45px;
    padding: 5px;
    input,select,button{
        width: 100%;
        height: 100%;
    }
}
.col-2{
    @include debug-one;
}
</style>
