<template>
  <div class="container mt-4" v-if="recipe">
    <h2 class="text-center mb-3">{{ recipe.title }}</h2>
    <img :src="recipe.image" class="recipe-image mx-auto d-block mb-3" />

    <div class="text-center mb-3 text-muted">
      By: {{ recipe.author }} | Typically made on: {{ recipe.occasion }}
    </div>

    <div class="recipe-info mb-4 text-center">
      <div><strong>Preparation time:</strong> {{ recipe.preparation_time }} minutes</div>
      <div v-if="recipe.isVegan">🌱 Vegan</div>
      <div v-if="recipe.isVegetarian">🥦 Vegetarian</div>
      <div v-if="recipe.isGlutenFree">🚫 Gluten Free</div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h4>Ingredients</h4>
        <ul>
          <li v-for="(ing, index) in recipe.ingredients" :key="index">
            {{ ing.amount }} {{ ing.unit }} {{ ing.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h4>Instructions</h4>
        <ol>
          <li v-for="(step, index) in recipe.instructions" :key="index">
            {{ step.step }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      const { data } = await this.axios.get(`/users/family/${this.$route.params.id}`);
      this.recipe = data;
    } catch (err) {
      console.error("Failed to load family recipe", err);
      this.$router.replace("/NotFound");
    }
  }
};
</script>

<style scoped>
.recipe-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
