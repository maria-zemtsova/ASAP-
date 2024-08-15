<template>
    <div>
        <h3 class="skills__item-title">{{ item.title }}</h3>
        <button class="more-button skills__button" @click="toggleActive"></button>
        <div class="skills__description" :class="{'skills__description--active' : isActive}">
            <p class="skills__description-text" v-html="item.description">
            </p>
        </div>
    </div>
</template>



<script>
  export default {
    name: 'front-29-vue-skill',
    props: {
      msg: String
    },

    data (){
       return{

        skills:[
                {
                    title:'Html',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                },
                {
                    title:'CSS',
                    description:'Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I’ve been here before,” but I can’t figure out how I wound up in the same place. The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche. When I “Googled” it, I found fourteen pages of links. It’s clearly a favorite with many people; I know it speaks volumes to me. “Autobiography in Five Chapters”',
                },
                {
                    title:'JavsScript',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                },
                {
                    title:'Vue',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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

  