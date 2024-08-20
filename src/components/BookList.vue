<template>
    <section>
        <h2>Book List</h2>
        <button @click="toggleActive">Show Book List</button>
        <ul v-show="isActive">
                <Skill v-for="item in books" v-bind:key="item.title" :item="item" />
        </ul>
    </section>
</template>
 
   <script>

   import Skill from './Book.vue'

   export default {
     name: 'bookList',  
     components: {
        Skill,
    },

     props: {
       msg: String
     },
   

     data (){
        return{
            books:[
                {
                    title:'To kill a mockingbird',
                },
                {
                    title:'War and Peace',
                },
                {
                    title:'Gone with the Wind',
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
   