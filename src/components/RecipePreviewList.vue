<template>
  <div class="container">
    <h3>{{ title }}</h3>
    
    <div class="col">
      <div class="col" v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-outline-primary" @click="updateRecipes" :disabled="isLoading">
        Refresh 🔄
      </button>
    </div>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/random"
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 400px;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
}

.recipePreview {
  height: 100%;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.btn {
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.9em;
  border: 2px solid #4267B2;
  background-color: white;
  color: #4267B2;
  cursor: pointer;
  transition: 0.3s;
}
</style>