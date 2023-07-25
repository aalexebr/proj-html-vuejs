<script>
import {store} from '../store'
export default{
    data(){
      return{
        store,
        navLinks:[
            {
                text:'home',
                link:'#'
            },
            {
                text:'about us',
                link:'#'
            },
            {
                text:'vehicles',
                link:'#'
            },
            {
                text:'dealers',
                link:'#'
            },
            {
                text:'packages',
                link:'#'
            },
            {
                text:'blog',
                link:'#'
            },
            {
                text:'contact',
                link:'#'
            },
        ],
      }
    },
    components: {

    }
}
</script>

<template>
<header>
    <div class="container">
        <div class="row align-center">
            <a href="#">
                <div class="logo row align-center">
                    <img src="../assets/img/logo-autocar11.png" alt="">
                </div>
            </a>
            
            <nav class="row align-center">
                <ul>
                    <li v-for="(link, index) in navLinks" :key="index">
                        <a href="">
                            {{ link.text }}
                        </a>
                    </li>
                </ul>
                <a href="#" class="button">
                    my account
                </a>
                <a href="#" class="button">
                    add car
                </a>
                <div class="hamburger">
                    I
                </div>
                <a href="#" class="button">
                    {{ store.contactNumber }}
                </a>
            </nav>
        </div>
    </div>
</header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

header{
    @include debug-large-two;
}
.logo{
    width: 150px;
    padding-top: 3px;
}
nav{
    ul{
        li{
            display: inline-block;
            padding: 5px;
            margin: 0 5px;
            text-transform: capitalize;
        }
    }
    .button{
        margin: 0 5px;
    }
}
</style>