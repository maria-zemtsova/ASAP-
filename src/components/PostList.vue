<template>
  <div class="postList">
    <h1 class="title">Названия постов</h1>
    <ul class="post__list" v-if="posts.length">
      <li class="post__item" v-for="post in posts" :key="post.id">
        <router-link class="item__link" :to="{ name: 'PostItem', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://vseverske.ru/blog/api/posts");
        let posts = response.data;
        console.log("response", response.data.data);
        this.posts = posts.data;

        console.log("response data", response.data);
        console.log("this posts", this.posts);
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
      }
    },
  },
};
</script>


  <style lang="scss" scoped>
  $primary-color: #c21d80;
  $secondary-color: #bb87a9;
  $text-color: #333;
  $border-radius: 5px;
  
  .title {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: $primary-color;
  }
  
  .post__list {
    list-style-type: none;
    padding: 0;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: $border-radius;
    background-color: #fff;
  
  .post__item{
      padding: 15px 20px;
      border-bottom: 1px solid #eaeaea;
      transition: background-color 0.3s;
      cursor: pointer;
  
      &:last-child {
        border-bottom: none;
      }
  
      &:hover {
        background-color: $secondary-color;
        color: #fff;
      }
    }

    .item__link{
      color: $text-color;
      text-decoration: none;

      &:hover {
        background-color: $secondary-color;
        color: #fff;
      }


    }
  }
  </style>
  