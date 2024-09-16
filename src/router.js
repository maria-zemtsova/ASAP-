import Vue from "vue";
import Router from "vue-router";
import PostItem from "@/components/PostItem.vue";
import PostList from "@/components/PostList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/posts", name: "PostList", component: PostList },
    {
      path: "/post/:id",
      name: "PostItem",
      component: PostItem,
      props: true,
    }, 
    { path: "*", redirect: "/posts" },
  ],
});