<template>
    <li>
         <h2>{{ item.title }}</h2>
            <button @click="toggleActive">Show {{ item.title }}</button>
            <ul v-show="isActive">
                <AccordionItem v-for="item in item.list" v-bind:key="item.list" :item="item" />           
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
        }        
    },
    methods:{
        toggleActive(){
            this.isActive = !this.isActive
        }
    }
   }
   </script>