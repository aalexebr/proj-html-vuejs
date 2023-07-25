<script>
import {store} from '../store'
export default{
    data(){
      return{
        store
      }
    },

}
</script>

<template>
    <div class="row">
        <div class="col-7 pos-relative">
            <img src="../assets/img/aoutcar-about-1.png" alt="">
            <div class="pos-absolute circle-content top">
                <div class="column align-center justify-center">
                    <h1>2 4</h1>
                    <p> Years of Experience</p>
                </div>
            </div>
            <div class="pos-absolute circle-content bottom">
                <div class="column align-center justify-center">
                    <h1>2 4 0</h1>
                    <p> Special Expert Team</p>
                </div>
            </div>
        </div>
        <div class="col-5">
            <h2>
                Want to buy or sell a vehicle?
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iusto provident iste nam mollitia inventore dolorem vel eligendi optio quos.
            </p>
            <div class="divider">
            <img src="../assets/img/divider.jpg" alt="">  
            </div>
            <div class="row align-center">
                <div class="col-25">
                    <font-awesome-layers class="fa-lg">
                        <font-awesome-icon icon="fa-solid fa-car" size="2x"/>
                        <font-awesome-icon icon="fa-solid fa-wrench" transform="right-7" rotation="" size="2x"/>
                    </font-awesome-layers>
                </div>
                <div class="col-auto">
                    <h4 class="capitalize">
                        model vehicles
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ut?
                    </p>
                </div>
            </div>
            <div class="row align-center">
                <div class="col-25">
                    <font-awesome-icon icon="fa-solid fa-car" size="3x"/>
                </div>
                <div class="col-auto">
                    <h4 class="capitalize">
                        2nd hand
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ut?
                    </p>
                </div>
            </div>
            <div class="button btn-no-border">
                get to know us
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;

.col-7{
    // @include debug-one;
    height: 450px;
    padding: 30px;
    background-image: url('../assets/img/circle-auto-car-1.png');
    background-repeat:no-repeat;
    background-position: center center;
    background-size: contain;
    img{
        object-fit: cover;
        height: 100%;
    }
    .circle-content{
        height: 125px;
        width: 125px;
        background-color: black;
        border-radius: 999px;
        color: white;
        // line-height: 50px;
        // vertical-align: middle;
        text-align: center;
        &.top{
            top: 40px;
            left:50px;
        }
        &.bottom{
            bottom:40px;
            right: 50px;
        }
    }
    
}
.col-5{
    // @include debug-two;
    // height: 100px;
    padding: 15px;
    & *{
    margin-bottom: 10px;
    }
    .divider{
        width: 25%;
    }
    .col-auto{
        margin-left: 10px;
    }
}
</style>