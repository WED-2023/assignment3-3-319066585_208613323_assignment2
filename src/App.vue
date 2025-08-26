<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <router-link class="navbar-brand fw-bold" :to="{ name: 'main' }">H&T Recipes</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'search' }">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <template v-if="!store.username">
            <li class="nav-item">
              <span class="nav-link">Hello Guest</span>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'register' }">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'login' }">Login</router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <span class="nav-link">{{ store.username }}</span>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'favorites' }">Favorites</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'view-my-recipes' }">My Recipes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'create-recipe' }">Add Recipe</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'family' }">Family Recipes</router-link>
            </li>
            <li class="nav-item">
              <button @click="logout" class="btn btn-sm btn-outline-light ms-2">Logout</button>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
  import { getCurrentInstance } from 'vue';

  export default {
    name: "App",
    setup() {
      const internalInstance = getCurrentInstance();
      const store = internalInstance.appContext.config.globalProperties.store;
      const router = internalInstance.appContext.config.globalProperties.$router;

      const logout = () => {
        store.logout();
        alert("You have been logged out.");
        router.push("/").catch(() => {});
      };


      return { store, logout };
    }
  };
</script>

<style lang="scss">
  @import "@/scss/form-style.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    background-color: #f8f9fa;
  }

  .navbar {
    margin-bottom: 20px;
  }

  .nav-link {
    color: white !important;
    margin-right: 10px;
  }

  .navbar-brand {
    font-weight: bold;
    color: #42b983 !important;
  }
</style>