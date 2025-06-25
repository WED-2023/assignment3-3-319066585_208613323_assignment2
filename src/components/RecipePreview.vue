<template>
  <router-link :to="`/recipes/${recipe.id}`" class="card h-100 text-decoration-none text-dark">
    <img
      v-if="recipe.image"
      :src="recipe.image"
      class="card-img-top recipe-image"
      alt="Recipe image"
    />
    <div class="card-body text-center">
      <h5 class="card-title">{{ recipe.title }}</h5>
      <p class="card-text">{{ recipe.readyInMinutes }} minutes</p>
      <p class="card-text">{{ recipe.aggregateLikes }} likes</p>
    </div>
  </router-link>
</template>



<script>
export default {
  name: "RecipePreview",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.hover-shadow:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}
</style>
