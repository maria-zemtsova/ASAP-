<template>
    <li class="skills__item"  :class="{'skills__item--active' : isActive}">
        <div>
            <h3 class="skills__item-title">{{ item.title }}</h3>
            <button class="more-button skills__button" @click="toggleActive"></button>
            <div class="skills__description" :class="{'skills__description--active' : isActive}">
                <p class="skills__description-text" v-html="item.description">
                </p>
            </div>
        </div>
    </li>
</template>



<script>
  export default {
    name: 'SkillComponent',
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

  