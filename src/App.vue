<template>
  <div id="app">
    <header>
      <nav><router-link to="/posts"> </router-link></nav>
    </header>
    <main><router-view></router-view></main>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {},
};
</script>

