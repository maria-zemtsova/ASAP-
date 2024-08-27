<template>
    <li :class="{'pink__item' : isPink}"> 
         <h2 :class="{'pink__title' : isPink}">{{ item.title }}</h2>
            <button @click="toggleActive" :class="{'pink__button' : isPink}">Show {{ item.title }}</button>
            <button @click="toggleStyle" :class="{'pink__button' : isPink}">Swich style</button>
            <ul class="list" v-show="isActive" :class="{'pink__list' : isPink}">
                <AccordionItem v-for="(item, id) in item.list" v-bind:key="id" :item="item" />           
            </ul>   
    </li>    
</template>

<script>
import AccordionItem from './AccordionItem.vue';
export default {
    name: 'AccordionList',
     components: {
        AccordionItem,
    },
    props:{
        item: Object,
    },
    data(){
        return{
            isActive:true, 
            isPink: false,
        }        
    },
    methods:{
        toggleActive(){
            this.isActive = !this.isActive
        },
        toggleStyle(){
            this.isPink = !this.isPink
        },
    }
   }
   </script>

<style lang="scss">

   .pink__item{
    display: grid;
    justify-content: center;
    gap: 25px;
    list-style: none;
   }
    .pink__list{
        background-color: #D0006E;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #ffffff;
        list-style: none;
        width: 250px;
        padding: 0;
    }

    .pink__title{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 32px; 
    }

    .pink__button{
        background-color: transparent;
        border: 1px solid #D0006E;
        height: 50px;
        color: #D0006E;
        text-transform: uppercase;
    }






</style>