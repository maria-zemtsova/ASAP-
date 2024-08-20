<template>
    <li>
        <div>
            <h3>{{ item.title }}</h3>
        </div>
    </li>
</template>



<script>
  export default {
    name: 'FilmComponent',
    props: {
      item: Object
    },

    data (){
       return{
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

  