<template>
  <div id="app">
    <BookList/>
    <FilmList/>
  </div>
</template>

<script>
import BookList from './components/BookList.vue'
import FilmList from './components/FilmList.vue'

export default {
  name: 'App',
  components: {
    BookList,
    FilmList
    
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
