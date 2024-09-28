<template>
    <div class="post-form">
      <router-link to="/posts">Назад </router-link>
      <h2>Редактирование поста</h2>
      <form @submit.prevent="submitPost">
        <div>
          <label for="title">Заголовок:</label>
          <input type="text" id="title" v-model="post.title" required />
        </div>
        <div>
          <label for="description">Описание:</label>
          <textarea
            id="description"
            v-model="post.description"
            required
          ></textarea>
        </div>
        <button type="submit" :disabled="!isValid">Сохранить изменения</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    props: ["id"], 
    data() {
      return {
        post: {
          title: "",
          description: "",
        },
        error: null,
      };
    },
    computed: {
      isValid() {
        return this.post.title && this.post.description;
      },
    },
    methods: {
      ...mapActions(["editPost", "getPost"]),
      async submitPost() {
        try {

          await this.editPost({ ...this.post, id: this.id });
          this.$router.push("/posts");
        } catch (error) {
          this.error = "Ошибка при сохранении поста.";
        }
      },
    },
    async created() {
      try {

        const post = await this.getPost(this.id);
        this.post = post; 
      } catch (error) {
        this.error = "Ошибка";
      }
    },
  };
  </script>

<style lang="scss">

$primary-color: #c21d80;
$secondary-color: #bb87a9;
$text-color: #333;

a {
      color: $text-color;
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


    // Стили для кнопок
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
  


</style>


