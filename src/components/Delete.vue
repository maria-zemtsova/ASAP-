<template>
    <div class="delete-form">
      <h2>Удалить пост</h2>
      <p>Вы уверены, что хотите удалить пост "{{ post.title }}"?</p>
      <button @click="confirmDelete">Удалить</button>
      <button @click="$emit('close')">Отмена</button>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    name: 'DeleteComponent',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        error: null,
      };
    },
    methods: {
      ...mapActions(["deletePost"]),
      async confirmDelete() {
        try {
          await this.deletePost(this.post.id);
          this.$emit("deleted"); 
          this.$emit("close"); 
        } catch (error) {
          this.error = error.response
            ? error.response.data.message
            : "Ошибка";
        }
      },
    },
  };
  </script>


<style lang="scss">

$primary-color: #c21d80;
$secondary-color: #bb87a9;
$text-color: #333;

.delete-form{
    position: fixed; 
    left: 50%; 
    top: 50%; 
    transform: translate(-50%, -50%);
    background-color: white; 
    padding: 20px; 
    border-radius: 8px; 
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 1000; 
}

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


    button {
      background-color: $secondary-color;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 15px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-left: 20px;

      &:hover {
        background-color: darken($secondary-color, 10%);
      }
    }
  


</style>


