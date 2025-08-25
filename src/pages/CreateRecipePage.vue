<template>
  <div>
    <!-- <b-button @click="showModal = true">Create New Recpie</b-button> -->
    <CreateRecipeModal v-model:showModal="showModal" @recipe-created="onRecipeCreated" />
  </div>
</template>

<script>
import CreateRecipeModal from "@/components/CreateRecipeModal.vue";

export default {
  components: { CreateRecipeModal },
  data() {
    return {
      showModal: true
    };
  },
  methods: {
    onRecipeCreated(newRecipe) {
      console.log("New recipe successfully created:", newRecipe);
    }
  }
};
</script>
