<template>
  <div id="app">
    <ul>
      <AccordionList v-for="item in lists" v-bind:key="item.title" :item="item"/>
    </ul>
  </div>
</template>

<script>

import AccordionList from './components/AccordionList.vue';

export default {
  name: 'App',
  data(){
        return{
            lists:[
            {
                title:'Book List',
                list: ['Intouchables', 'The Shawshank Redemption', 'Forrest Gump', 'Forrest Gump'],
            },
            {
                title:'Film List',
                list: ['To kill a mockingbird', 'War and Peace', 'Gone with the Wind'],

            },
        ],      
        }   
    },
  components: {
    AccordionList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
