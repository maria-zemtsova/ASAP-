<template>
  <div class="login">
    <h2>Авторизация</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="!isFormValid">Войти</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "LoginComponent", 
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  computed: {
    isFormValid() {
      return this.email && this.password;
    },
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/posts"); 
      } catch (error) {
        this.error = "Ошибка";
      }
    },
  },
};
</script>
  
