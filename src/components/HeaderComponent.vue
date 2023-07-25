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
                    <div class="row align-center">
                        <div class="img">
                        <img src="../assets/img/header_icons/padlock.png" alt="">
                    </div>
                    <span class="capitalize">
                       my account 
                    </span>
                    </div>
                </a>
                <a href="#" class="button">
                    <div class="row align-center">
                        <div class="img">
                        <img src="../assets/img/header_icons/add.png" alt="">
                    </div>
                    <span class="capitalize">
                       add car
                    </span>
                    </div>
                </a>
                <div class="hamburger">
                    <font-awesome-icon icon="fa-solid fa-bars" class="icon"/>
                </div>
                <a href="#" class="button">
                    <div class="row align-center">
                        <div class="img">
                        <img src="../assets/img/header_icons/headphones.png" alt="">
                    </div>
                    <span class="capitalize">
                        {{ store.BusinessInfo.contact.text }}
                    </span>
                    </div>
                    
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
.container{
    max-width: 1100px;
    margin: auto;
}
header{
    // @include debug-large-two;
    padding: 5px 0;
}
.logo{
    width: 150px;
    padding-top: 3px;
}
.img{
    width: 40px;
    margin-right: 5px;
    img{
        filter: invert(100%)
    }
}
nav{
    ul{
        li{
            display: inline-block;
            // padding: 5px;
            margin: 0 5px;
            text-transform: capitalize;
        }
    }
    .button{
        margin-left: 5px;
    }
}
.icon{
    font-size: 1.50rem;
    padding: 0 10px;
}
</style>