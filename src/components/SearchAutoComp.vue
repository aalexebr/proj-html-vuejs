<script>
import {store} from '../store'
import AutoTypeCard from './AutoTypeCard.vue'
import AutoGeneralCard from './AutoGeneralCard.vue'
export default{
    data(){
      return{
        store,
        listFlag : [],
        selectType : '',
      }
    },
    components: {
        AutoTypeCard,
        AutoGeneralCard
    },
    methods:{
        getListedNum(){
            for(let i=0; i<this.store.AutoTypeList.length; i++){
                let count = 0
                for(let j=0; j<this.store.ListedAutos.length; j++){
                    if(this.store.AutoTypeList[i].type ==this.store.ListedAutos[j].type){
                        count++
                    }
                }
                this.store.AutoTypeList[i].listings = count
            }
        },
        displayListed(i){
            this.listFlag=[]
            this.listFlag.push(this.store.AutoTypeList[i].type)
            console.log(this.listFlag)
        },
        getTypes(){
            for(let j=0; j<this.store.AutoTypeList.length; j++){
                this.listFlag.push(this.store.AutoTypeList[j].type)
            }
        },
        search(){
            this.selectType=''
            for(let j=0; j<this.store.AutoTypeList.length; j++){
                this.listFlag.push(this.store.AutoTypeList[j].type)
                console.log(this.selectType)
            }
        },
        selectChangeSearch(){
            this.listFlag=[]
            this.listFlag.push(this.selectType)
        }
    },
    created(){
        this.getListedNum();
        this.getTypes()
    }
}
</script>

<template>
<div class="container">
    <!-- search bar -->
    <form action="" @submit.prevent="search()">
        <div class="row">
            <div class="col-8">
                <input type="text" placeholder="Keywords" class="text-center">
            </div>
            <div class="col-8">
                <input type="text" placeholder="Location" class="text-center">
            </div>
            <div class="col-8">
                <select name="" id="" class="text-center" v-model="selectType" @change="selectChangeSearch">
                    <option value="" disabled>All Categories</option>
                    <option :value="store.AutoTypeList[i].type" v-for="(type,i) in store.AutoTypeList" :key="i" class="capitalize">
                        {{ store.AutoTypeList[i].type }}
                    </option>
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
                <button class="button"  type="submit">
                    search
                </button>
            </div>
        </div>
    </form>

    <!-- car types -->
    <div class="row shadow">
        <div class="col-2" v-for="(type,i) in store.AutoTypeList" :key="i" @click="displayListed(i)">
            <AutoTypeCard :i="i"/>
        </div>
            
    </div>
    <!-- auto cards results -->
    <div class="row wrap space-around">
        <div class="col-3 shadow" v-for="(auto,i) in store.ListedAutos" :key="i" :class="{'d-none': !listFlag.includes(store.ListedAutos[i].type)}">
            <AutoGeneralCard :i="i"/>
        </div>     
    </div>
    <div class="row justify-center">
        <div class="button btn-no-border">
                show all cars &#8594
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
@use '../assets/scss/debugger.scss' as *;
@use '../assets/scss/utilities.scss' as *;
.container{
    max-width: 1100px;
}

.col-8{
    width: calc(100% / 8);
    // @include debug-one;
    // height: 45px;
    padding: 10px;
    input,select,button{
        width: 100%;
        height: 100%;
    }
    input{
        border: 1px solid #AAAAAA;
        border-radius: 5px;
        background-color: white;
        color: #AAAAAA;
        padding: 15px;
    }
    select{
        border: 1px solid #AAAAAA;
        border-radius: 5px;
        background-color: white;
        color: #000000;
        padding: 15px;
    }
}
.auto-type-list{
    -webkit-box-shadow: 0px 0px 22px 2px #dfdfdf; 
    box-shadow: 0px 0px 22px 2px rgb(214, 214, 214);
    background-color: #ededed;
    margin: 10px 0;
}
.shadow{
    -webkit-box-shadow: 0px 0px 22px 2px rgba(112,112,112,0.49); 
    box-shadow: 0px 0px 22px 2px rgba(112,112,112,0.49);
    background-color: #ededed;
    margin-bottom: 15px;
}
.col-2,.col-3{
    padding: 1px;
}
.button{
    margin-bottom: 20px;
}
</style>
