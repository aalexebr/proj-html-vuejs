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

        </div>
        <div class="pos-absolute circle-content bottom">

</div>
    </div>
    <div class="col-5">
        <h3>
            want to buy
        </h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iusto provident iste nam mollitia inventore dolorem vel eligendi optio quos.
        </p>
        <div class="divider">
          <img src="../assets/img/divider.jpg" alt="">  
        </div>
        <div class="row align-center">
            <div class="col-25">
                icon
            </div>
            <div class="col-auto">
                <h4>
                    model vehicles
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ut?
                </p>
            </div>
        </div>
        <div class="row align-center">
            <div class="col-25">
                icon
            </div>
            <div class="col-auto">
                <h4>
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
    @include debug-one;
    height: 450px;
    padding: 30px;
    background-image: url('../assets/img/circle-auto-car-1.png');
    background-repeat:no-repeat;
    background-position: center center;
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
        &.top{
            top: 0;
            left:0;
        }
        &.bottom{
            bottom: 0;
            right: 0;
        }
    }
    
}
.col-5{
    @include debug-two;
    // height: 100px;
    padding: 15px;
    .divider{
        width: 25%;
    }
}
</style>