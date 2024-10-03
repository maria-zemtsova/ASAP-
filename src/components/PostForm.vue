<template>
    <div class="post-form">
      <h2>{{ isEditMode ? 'Создание' : 'Редактирование' }}</h2> <!--Разный заголовок в зависимости от того редактируем пост или создаем-->
      <form @submit.prevent="submitPost">
        <div>
          <label for="title">Название</label> 
          <input type="text" id="title" v-model="post.title" required /> <!---->
        </div>
        <div>
          <label for="description">Описание:</label>
          <textarea
            id="description"
            v-model="post.description"
            required
          ></textarea>
        </div>
        <button type="submit" :disabled="!isValid">{{ isEditMode ? 'Сохранить изменения' : 'Создать пост' }}</button>
      </form>
      <p v-if="error">{{ error }}</p> <!---->
    </div>
  </template>
  
  <script>
  import { mapActions,  } from "vuex"; //mapGetters
  
  export default {
    props:{
      isEditMode: {  // передаем значение этой переменной через роутер
          type: Boolean,
          default: false,
        },
    },
    data() {
      return {
        post: {
          title: "",
          description: "",
        },
        error: null,
      };
    },
    // computed: {
    //   ...mapGetters(['getPostById']),
    //   isValid() {
    //     return this.post.title && this.post.description;
    //   },
    // },
    methods: {
    ...mapActions(["createPost", "editPost"]),
    
    async submitPost() {
      try {
        console.log("Отправляем данные поста:", this.post);
        if (this.isEditMode) {
          await this.editPost(this.post); // Используем editPost для редактирования
        } else {
          await this.createPost(this.post); // Используем createPost для создания
        }
        this.$router.push("/posts"); // Перенаправляем на страницу со всеми постами
      } catch (error) {
        this.error = error.response
          ? error.response.data.message
          : "Ошибка";
      }
    },
  },
  };
  </script>