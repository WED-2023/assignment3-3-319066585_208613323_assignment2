<template>
  <router-link :to="`/family/${recipe.id}`" class="card card-hover text-decoration-none text-dark">
    <img v-if="recipe.image" :src="recipe.image" class="card-img-top recipe-image" alt="Recipe image" />
    <div class="card-body">
      <h5 class="card-title text-center">{{ recipe.title }}</h5>
      <p class="text-muted small text-center">
        By: {{ recipe.author }} | Typically made on: {{ recipe.occasion }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "RecipeFamilyPreview",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}
.card-hover:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}
.recipe-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}
</style>
