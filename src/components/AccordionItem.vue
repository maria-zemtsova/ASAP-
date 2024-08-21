<template>
    <li>
        <div>
            <h3>{{ item.list }}</h3>
        </div>
    </li>
</template>



<script>
  export default {
    name: 'AccordionComponent',
    props: {
      item: Array
    }

//     data (){
//        return{
//             isActive:false
//        }
//    },
//    methods:{
//        toggleActive(){
//            this.isActive = !this.isActive
//        }
//    }
  }

 
</script>

  