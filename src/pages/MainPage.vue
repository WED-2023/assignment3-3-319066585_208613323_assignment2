<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Left Column -->
      <div :class="[store.username ? 'col-md-6' : 'col-md-8']">
        <div class="d-flex justify-content-between align-items-center">
          <h3>Explore these recipes</h3>
        </div>
        <div class="vertical-recipes">
          <RecipePreviewList :recipes="randomRecipes" />
        </div>
      </div>

      <!-- Right Column -->
      <div :class="[store.username ? 'col-md-6' : 'col-md-4']">
        <div v-if="!store.username" class="card p-4 shadow-sm">
          <h4 class="mb-3 text-center">Login</h4>
          <b-form @submit.prevent="login">
            <b-form-group label="Username">
              <b-form-input v-model="state.username" required />
            </b-form-group>
            <b-form-group label="Password">
              <b-form-input type="password" v-model="state.password" required />
            </b-form-group>
            <b-button type="submit" variant="primary" class="w-100">Login</b-button>
            <b-alert v-if="state.submitError" variant="danger" class="mt-3" show>
              {{ state.submitError }}
            </b-alert>
            <div class="mt-3 text-center">
              Don’t have an account?
              <router-link to="/register">Register here</router-link>
            </div>
          </b-form>
        </div>

        <div v-else>
          <h4 class="mb-3">Last liked recipes</h4>
          <div class="vertical-recipes">
            <RecipePreviewList :recipes="randomRecipes" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import RecipePreviewList from '@/components/RecipePreviewList.vue';
import { ref, reactive, onMounted, getCurrentInstance } from 'vue';

export default {
  components: { RecipePreviewList },
  setup() {
    const store = getCurrentInstance().appContext.config.globalProperties.store;
    const randomRecipes = ref([]);
    const likedRecipes = ref([]);
    const isLoading = ref(false);

    const state = reactive({
      username: '',
      password: '',
      submitError: null,
    });

    const refreshRandomRecipes = async () => {
      isLoading.value = true;
      try {
        const response = await window.axios.get('/recipes/random');
        randomRecipes.value = response.data;
      } catch (err) {
        console.error('Failed to load random recipes', err);
      } finally {
        isLoading.value = false;
      }
    };

    const login = async () => {
      try {
        const response = await window.axios.post('/Login', {
          username: state.username,
          password: state.password,
        }, { withCredentials: true });
        store.login(state.username);
        state.submitError = null;
        await loadLikedRecipes();
        console.log('Login successful', response.data);
      } catch (err) {
        state.submitError = err.response?.data?.message || 'Login failed';
        alert(state.submitError);
      }
    };

    const loadLikedRecipes = async () => {
      try {
        const response = await window.axios.get('/users/likedRecipes');
        likedRecipes.value = response.data;
      } catch (err) {
        likedRecipes.value = [];
      }
    };

    onMounted(() => {
      refreshRandomRecipes();
      if (store.username) {
        loadLikedRecipes();
      }
    });

    return {
      store,
      randomRecipes,
      likedRecipes,
      isLoading,
      refreshRandomRecipes,
      state,
      login,
    };
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 12px;
}

.vertical-recipes {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
</style>

