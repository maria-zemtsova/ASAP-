<template>
  <div>
    <nav><router-link to="/posts">Посты </router-link></nav>

    <div class="postDetail" v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostDetail",
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(
          `http://vseverske.ru/blog/api/post/${this.id}`
        );
        this.post = response.data.data; 
        console.log("post !!!!", this.post);
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error);
      }
    },
  },
};
</script>

<style lang="scss">

div {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

// навигация
nav {
  background-color: #c21d80;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #d4d4d4;
    }
  }
}

.postDetail {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  
  h3 {
    margin: 0 0 10px;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.5;
    font-size: 16px;
  }
}

</style>
