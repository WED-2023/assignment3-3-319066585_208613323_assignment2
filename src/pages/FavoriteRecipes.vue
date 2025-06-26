<template>
  <div class="container mt-4">
    <h2>Your Favorite Recipes</h2>
    <div v-if="recipes.length === 0">
      <p>You haven't liked any recipes yet.</p>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="recipe in recipes" :key="recipe.id">
        <RecipePreview :recipe="recipe" />
      </div>
    </div>
    <b-alert variant="danger" v-if="error" show>
      {{ error }}
    </b-alert>
  </div>
</template>

<script>
import RecipePreview from '@/components/RecipePreview.vue';

export default {
  name: 'FavoriteRecipes',
  components: {
    RecipePreview,
  },
  data() {
    return {
      recipes: [],
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await window.axios.get('/users/favorites');
      this.recipes = response.data;
    } catch (err) {
      this.error = err.response?.data || 'Failed to fetch favorites.';
    }
  },
};
</script>
