import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default new Vuex.Store({
  state: {
    user: null,
    token: token || null, 
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    // Логин
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          "http://vseverske.ru/blog/api/sign-in",
          credentials
        );
        console.log("Login response:", response.data);

        const token = response.data.token;
        const user = response.data.data; 


        commit("SET_TOKEN", token);
        commit("SET_USER", user);


        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } catch (error) {
        if (error.response) {
          console.error(
            "Ошибка авторизации:",
            error.response.data.message || "Ошибка на сервере"
          );
        } else {
          console.error("Ошибка сети:", error.message);
        }
      }
    },

    async register({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://vseverske.ru/blog/api/sign-up",
          userData
        );
        console.log("Register response:", response.data);

        const token = response.token; 
        const user = response.data; 

       
        if (token) {
          commit("SET_TOKEN", token);
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

   
        commit("SET_USER", user);
      } catch (error) {
        if (error.response) {
         
          console.error("Ошибка регистрации:", error.response.data);
          if (error.response.status === 422) {
            throw new Error(
              "Ошибка валидации: " + error.response.data.errors.join(", ")
            );
          } else {
            throw new Error(error.response.data.message || "Ошибка на сервере");
          }
        } else {
          console.error("Ошибка сети:", error.message);
          throw new Error("Ошибка сети. Проверьте соединение.");
        }
      }
    },
    // Логаут
    logout({ commit }) {
      commit("LOGOUT");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
    // Get Post
    async getPosts(_, postId) {
      try {
        const response = await axios.get(
          `http://vseverske.ru/blog/api/post/${postId}`
        );
        return response.data; 
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error);
        throw new Error("Не удалось загрузить пост.");
      }
    },
    // Get Post
    async getPost(_, postId) {
      try {
        const response = await axios.get(
          `http://vseverske.ru/blog/api/post/${postId}`
        );
        return response.data; 
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error);
        throw new Error("Не удалось загрузить пост.");
      }
    },

    async editPost(_, postData) {
      try {
        await axios.put("http://vseverske.ru/blog/api/post", postData);
        console.log(`Пост с id ${postData.id} был успешно обновлен.`);
      } catch (error) {
        console.error("Ошибка при редактировании поста:", error);
      }
    },

    async deletePost(_, postId) {
      try {
        await axios.delete(`http://vseverske.ru/blog/api/post/${postId}`);
        console.log(`Пост с id ${postId} был  удален.`);
      } catch (error) {
        console.error("Ошибка при удалении поста: ", error);
      }
    },

    async createPost(_, postData) {
      try {
        const response = await axios.post(
          `http://vseverske.ru/blog/api/post`,
          postData
        );
        console.log("Пост был создан", response.data);
        return response.data;
      } catch (error) {
        console.error(
          "Ошибка при создании поста: ",
          error.response ? error.response.data : error.message
        );
        throw error;
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    getUser(state) {
      return state.user; 
    }, 
    // Геттер для получения поста по ID
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id);   
    },
  }
});