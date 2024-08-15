<template>
        <header class="header">
        <svg class="header__logo" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#6E38F7"/>
            <rect x="11" y="11" width="14" height="6" rx="2" fill="white"/>
            <rect x="11" y="19" width="14" height="6" rx="2" fill="white"/>
        </svg>
        <ul class="header__list" :class="{'header__list--active' : isActive}">
            <li class="header__item" v-for="item in list" v-bind:key="item">
                <a class="header__link" href="#">
                    {{item.item}}     
                </a>
            </li>
        </ul>
        <button class="header__button-wrapper" @click="toggleActive">
            <svg class="header__button" :class="{'header__button--closed' : isActive}"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66663 5C1.66663 4.53976 2.03972 4.16667 2.49996 4.16667H17.5C17.9602 4.16667 18.3333 4.53976 18.3333 5C18.3333 5.46024 17.9602 5.83333 17.5 5.83333H2.49996C2.03972 5.83333 1.66663 5.46024 1.66663 5ZM1.66663 10C1.66663 9.53976 2.03972 9.16667 2.49996 9.16667H17.5C17.9602 9.16667 18.3333 9.53976 18.3333 10C18.3333 10.4602 17.9602 10.8333 17.5 10.8333H2.49996C2.03972 10.8333 1.66663 10.4602 1.66663 10ZM1.66663 15C1.66663 14.5398 2.03972 14.1667 2.49996 14.1667H17.5C17.9602 14.1667 18.3333 14.5398 18.3333 15C18.3333 15.4602 17.9602 15.8333 17.5 15.8333H2.49996C2.03972 15.8333 1.66663 15.4602 1.66663 15Z" fill="#5C33B9"/>
            </svg>
            <svg class="header__button" :class="{'header__button--closed' : !isActive}" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#FAFAFA"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4068 10.4107C10.7322 10.0853 11.2599 10.0853 11.5853 10.4107L15.9961 14.8215L20.4068 10.4107C20.7322 10.0853 21.2599 10.0853 21.5853 10.4107C21.9107 10.7362 21.9107 11.2638 21.5853 11.5893L17.1746 16L21.5853 20.4107C21.9107 20.7362 21.9107 21.2638 21.5853 21.5893C21.2599 21.9147 20.7322 21.9147 20.4068 21.5893L15.9961 17.1785L11.5853 21.5893C11.2599 21.9147 10.7322 21.9147 10.4068 21.5893C10.0814 21.2638 10.0814 20.7362 10.4068 20.4107L14.8175 16L10.4068 11.5893C10.0814 11.2638 10.0814 10.7362 10.4068 10.4107Z" fill="#5C33B9"/>
            </svg>
        </button>
        
        
    </header>
  </template>
  
  <script>
  export default {
    name: 'front-29-vue-header',
    props: {
      msg: String
    },



    data(){
        return{
          list:[
            {item: "About"},
            {item: "blog"},
            {item: "Contacts us"},
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
  
  