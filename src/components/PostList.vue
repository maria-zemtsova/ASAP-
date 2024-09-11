<template>
    <div>
      <h2 class="title">Названия постов</h2>
      <ul class="post__list">
        <li class="post__item" v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
</template>
  
<script>
import axios from 'axios';
import axiosOption from '../axios';

const axiosApiInstance = axios.create(axiosOption);

export default {
  name: 'App',
  data(){
    return{
      posts:[],
    }
  },
  async created(){
    try{
      let response = await axiosApiInstance.get('/blog/api/posts')
        this.posts = response.data.data,
        console.log('posts:', this.posts)
    } catch (error) {
        console.error('Ошибка при загрузке постов:', error);
    }
    }
  }

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
  
  .post__item {
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
  }
  </style>
  