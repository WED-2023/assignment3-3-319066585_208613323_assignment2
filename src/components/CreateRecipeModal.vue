<template>
    <b-modal
      :visible="showModal"
      @hide="$emit('update:showModal', false)"
      title="Create New Recipe"
      @ok="submitRecipe"
    >
    <b-form @submit.prevent="submitRecipe">
      <b-form-group label="title">
        <b-form-input v-model="recipe.title" required></b-form-input>
      </b-form-group>

      <b-form-group label="preparation time (in minutes)">
        <b-form-input v-model.number="recipe.readyInMinutes" type="number" required></b-form-input>
      </b-form-group>

      <b-form-group label="image URL">
        <b-form-input v-model="recipe.image" placeholder="image"></b-form-input>
      </b-form-group>

      <b-form-group label="ingredients (separated by commas)">
        <b-form-textarea v-model="recipe.ingredients" rows="3"></b-form-textarea>
      </b-form-group>

      <b-form-group label="instructions (separated by commas)">
        <b-form-textarea v-model="recipe.instructions" rows="3"></b-form-textarea>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: "CreateRecipeModal",
  props: {
    showModal: Boolean
  },
  emits: ['update:showModal', 'recipe-created'],
  data() {
    return {
      recipe: {
        title: "",
        readyInMinutes: 0,
        aggregateLikes: 0,
        image: "",
        ingredients: "",
        instructions: ""
      }
    };
  },
  methods: {
    async submitRecipe() {
      try {
        const payload = {
          title: this.recipe.title,
          readyInMinutes: this.recipe.readyInMinutes,
          aggregateLikes: this.recipe.aggregateLikes,
          image: this.recipe.image,
          ingredients: this.recipe.ingredients.split(",").map(i => i.trim()),
          instructions: this.recipe.instructions.split(",").map(s => s.trim()),
        };

        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/myRecipes",
          payload,
          { withCredentials: true }
        );

        this.$emit("recipe-created", response.data);
        this.$emit("update:showModal", false);
      } catch (error) {
        console.error("Error creating new recipe:", error);
      }
    }
  }
};
</script>
