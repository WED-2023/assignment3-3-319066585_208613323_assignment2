<template>
  <div>
    <b-button 
      variant="primary" 
      @click="toggleFavorite" 
      :disabled="isLoading"
    >
      {{ isAdded ? 'Remove from Favorites' : 'Add to Favorites' }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: "AddToFavoritesButton",
  props: {
    recipeId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isAdded: false,
      isLoading: false
    };
  },
  // Check if the recipe is already in favorites when the component mounts
  async mounted() {
    try {
      const response = await this.axios.get(
        this.$root.store.server_domain + "/users/myFavorites",
        { withCredentials: true }
      );
      // Check if the current recipe ID exists in the user's favorites
      this.isAdded = response.data.some(r => r.recipe_id === this.recipeId);
    } catch (error) {
      console.error("Error checking favorites:", error);
    }
  },
  methods: {
    // Toggle between adding and removing recipe from favorites
    async toggleFavorite() {
      this.isLoading = true;
      try {
        if (this.isAdded) {
          // Remove from favorites
          await this.axios.delete(
            this.$root.store.server_domain + `/users/favorites/${this.recipeId}`,
            { withCredentials: true }
          );
          this.isAdded = false;
        } else {
          // Add to favorites
          await this.axios.post(
            this.$root.store.server_domain + "/users/favorites",
            { recipeId: this.recipeId },
            { withCredentials: true }
          );
          this.isAdded = true;
        }
      } catch (error) {
        alert("An error occurred while updating favorites.");
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
