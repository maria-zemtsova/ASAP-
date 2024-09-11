<template>
  <div id="app">
    <post-list />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';


export default {
  components: { PostList },
  name: 'App',
  comments: {
    PostList
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
