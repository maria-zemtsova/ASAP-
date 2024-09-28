<template>
  <div id="app">
    <header>
      <nav>
        <div v-if="!isAuthenticated">
          <router-link v-if="!isAuthenticated" to="/login">Вход</router-link>
          <router-link v-if="!isAuthenticated" to="/register">Регистрация</router-link>
        </div>
        <router-link to="/posts"> </router-link>
        <div v-if="isAuthenticated">
            <button @click="logout">Выход</button>
            <router-link v-if="isAuthenticated" :to="{name: 'Create'}">
               <button>Создать пост</button>
            </router-link>
        </div>
        
        
      </nav>
      
    </header>
    <main><router-view></router-view></main>
  </div>
</template>

<script>


import { mapActions, mapGetters } from "vuex";


export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style lang="scss">

$primary-color: #c21d80;
$secondary-color: #bb87a9;
$text-color: #333;

header {
  background-color: $primary-color;
  padding: 10px 20px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #fff;
      text-decoration: none;
      margin: 0 10px;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: $secondary-color;
        color: #fff;
      }
    }


    button {
      background-color: $secondary-color;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken($secondary-color, 10%);
      }
    }
  }
}

</style>


