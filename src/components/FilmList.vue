<template>
    <section>
        <h2>Film List</h2>
        <button @click="toggleActive">Show Film List</button>
        <ul v-show="isActive">
                <Skill v-for="item in films" v-bind:key="item.title" :item="item" />
        </ul>
    </section>
</template>
 
   <script>

   import Skill from './Film.vue'

   export default {
     name: 'filmList',  
     components: {
        Skill,
    },

     props: {
       msg: String
     },
   

     data (){
        return{
            films:[
                {
                    title:'Intouchables',
                },
                {
                    title:'The Shawshank Redemption',
                },
                {
                    title:'Forrest Gump',
                },
            ],      
        isActive:false
        }
    },
    methods:{
        toggleActive(){
            this.isActive = !this.isActive
        }
    }
   }
   </script>