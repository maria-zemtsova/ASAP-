<template>
  <div class="postList">
    <h1 class="title">Названия постов</h1>
    <ul class="post__list" v-if="posts.length">
      <li class="post__item" v-for="post in posts" :key="post.id">
        <router-link class="item__link" :to="{ name: 'PostItem', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
        <div class="post__buttons">
          <router-link
            v-if="isAuthenticated"
            :to="{ name: 'Edit', params: { id: post.id } }"
          >
            <button>Редактировать</button></router-link
          >
          <button v-if="isAuthenticated" @click="showDeleteForm = post.id">
            Удалить пост
          </button>
        </div>
      </li>
    </ul>
    <p v-else>Загрузка...</p>
     <DeleteForm
        v-if="showDeleteForm"
        :post="getPostById(showDeleteForm)"
        @close="showDeleteForm = null"
        @deleted="fetchPosts"
    />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import DeleteForm from "./Delete.vue";
export default {
  name: "PostList",
  components: { DeleteForm },
  data() {
    return {
      posts: [],
      showDeleteForm: null,
    };
  },
  created() {
    this.fetchPosts();
  },
  computed: { ...mapGetters(["isAuthenticated"]) },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://vseverske.ru/blog/api/posts");
        let posts = response.data;
        this.posts = posts.data;
      } catch (error) {
        console.error("Ошибка", error);
      }
    },
    getPostById(id) {
      return this.posts.find((post) => post.id === id); 
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
  
  }
  </style>
  