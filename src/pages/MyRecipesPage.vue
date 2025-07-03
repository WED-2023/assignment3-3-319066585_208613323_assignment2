<template>
  <div class="container mt-4">
    <h1 class="title text-center mb-4">My Recipes</h1>

    <div v-if="selectedRecipe">
      <button class="btn btn-secondary mb-3" @click="selectedRecipe = null">
        ← Back to my recipes
      </button>
      <MyRecipeViewPage :recipeData="selectedRecipe" />
    </div>

    <div v-else>
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="(recipe, index) in myRecipes"
          :key="index"
        >
          <div @click="viewRecipe(recipe)">
              <RecipePreview :recipe="adaptRecipe(recipe)" />
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyRecipeViewPage from "@/pages/MyRecipeViewPage.vue";
import RecipePreview from "@/components/RecipePreview.vue";

export default {
  components: {
    MyRecipeViewPage,
    RecipePreview,
  },
  data() {
    return {
      myRecipes: [],
      selectedRecipe: null,
    };
  },
  async created() {
    try {
      const response = await this.axios.get(this.$root.store.server_domain + "/users/myRecipes");
      this.myRecipes = response.data;
    } catch (error) {
      console.error("Failed to load my recipes:", error);
    }
  },
  methods: {
    viewRecipe(recipe) {
      this.selectedRecipe = recipe;
    },
    adaptRecipe(recipe) {
      return {
        id: recipe.recipe_id,
        title: recipe.title,
        readyInMinutes: recipe.preparation_time,
        image: recipe.photo,
        popularity: 0,
        vegan: !!recipe.isVegan,
        vegetarian: !!recipe.isVegetarian,
        glutenFree: !!recipe.isGlutenFree,
      };
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 400px;
}
</style>
