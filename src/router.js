import Vue from "vue";
import Router from "vue-router";
import PostItem from "@/components/Post.vue";
import PostList from "@/components/PostList.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Create from "@/components/PostCreate.vue";
import Delete from "@/components/Delete.vue";
import Edit from "@/components/EditPost.vue";

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

    { path: "/login", 
      component: Login,
     },

    {
      path: "/post/create",
      name: "Create",
      component: Create,
    },
    {
      path: "/post/delete",
      name: "Delete",
      component: Delete,
    },
    {
      path: "/post/edit",
      name: "Edit",
      component: Edit,
    },


     { path: "/register", 
      component: Register,
     },
  ],
});



