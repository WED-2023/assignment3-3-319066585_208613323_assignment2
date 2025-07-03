<template>
  <div class="container mt-4">
    <b-button variant="primary" @click="showCreateModal = true">
      Create New Recipe
    </b-button>

    <b-modal v-model="showCreateModal" title="Create New Recipe" hide-footer>
      <b-form @submit.prevent="submitRecipe">
        <!-- Title -->
        <b-form-group label="Recipe Title">
          <b-form-input v-model="newRecipe.title" required />
        </b-form-group>

        <!-- Image URL -->
        <b-form-group label="Image URL (optional)">
          <b-form-input v-model="newRecipe.photo" />
        </b-form-group>

        <!-- Preparation Time -->
        <b-form-group label="Preparation Time (in minutes)">
          <b-form-input type="number" min="1" v-model.number="newRecipe.preparation_time" required />
        </b-form-group>

        <!-- Instructions -->
        <b-form-group label="Preparation Steps">
          <div
            v-for="(step, index) in newRecipe.instructions"
            :key="'step-' + index"
            class="d-flex mb-2"
          >
            <b-form-input
              v-model="step.step"
              :placeholder="'Step ' + (index + 1)"
              required
              class="me-2"
            />
            <b-button variant="danger" @click="removeInstruction(index)" size="sm">x</b-button>
          </div>
          <b-button variant="success" @click="addInstruction" size="sm">Add Step</b-button>
        </b-form-group>

        <!-- Ingredients -->
        <b-form-group label="Ingredients">
          <div
            v-for="(ingredient, index) in newRecipe.ingredients"
            :key="'ingredient-' + index"
            class="d-flex mb-2"
          >
            <b-form-input
              v-model="ingredient.name"
              placeholder="Ingredient name"
              required
              class="me-2"
            />
            <b-form-input
              v-model="ingredient.amount"
              type="number"
              min="0"
              step="0.1"
              placeholder="Amount"
              required
              class="me-2"
            />
            <b-form-input
              v-model="ingredient.unit"
              placeholder="Unit (e.g. grams, ounces)"
              class="me-2"
            />
            <b-button variant="danger" @click="removeIngredient(index)" size="sm">x</b-button>
          </div>
          <b-button variant="success" @click="addIngredient" size="sm">Add Ingredient</b-button>
        </b-form-group>

        <!-- Diet -->
        <b-form-group label="Diet Types">
          <b-form-checkbox v-model="newRecipe.isVegan">Vegan</b-form-checkbox>
          <b-form-checkbox v-model="newRecipe.isVegetarian">Vegetarian</b-form-checkbox>
          <b-form-checkbox v-model="newRecipe.isGlutenFree">Gluten Free</b-form-checkbox>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mt-3" :disabled="!formValid">
          Save Recipe
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "CreateRecipeModal",
  data() {
    return {
      showCreateModal: false,
      newRecipe: {
        title: '',
        photo: '',
        preparation_time: null,
        instructions: [{ step: '' }],
        ingredients: [{ id: null, name: '', amount: '', unit: '' }],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: false
      }
    };
  },
  computed: {
    formValid() {
      const r = this.newRecipe;
      return (
        r.title &&
        r.preparation_time &&
        r.instructions.length &&
        r.instructions &&
        r.ingredients.length &&
        r.ingredients
      );
    }
  },
  methods: {
    addInstruction() {
      this.newRecipe.instructions.push({ step: '' });
    },
    removeInstruction(index) {
      this.newRecipe.instructions.splice(index, 1);
    },
    addIngredient() {
      this.newRecipe.ingredients.push({ id: null, name: '', amount: '', unit: '' });
    },
    removeIngredient(index) {
      this.newRecipe.ingredients.splice(index, 1);
    },
    async submitRecipe() {
      try {
        // Add "number" field to instructions
        const instructions = this.newRecipe.instructions.map((step, idx) => ({
          number: idx + 1,
          step: step.step
        }));

        const payload = {
          title: this.newRecipe.title,
          photo: this.newRecipe.photo,
          preparation_time: this.newRecipe.preparation_time,
          ingredients: this.newRecipe.ingredients,
          instructions: instructions,   
          isVegan: this.newRecipe.isVegan ? 1 : 0,
          isVegetarian: this.newRecipe.isVegetarian ? 1 : 0,
          isGlutenFree: this.newRecipe.isGlutenFree ? 1 : 0
        };

        await this.axios.post('/users/myRecipes', payload);
        alert('Recipe saved successfully!');


        this.showCreateModal = false;
        this.resetForm();
        this.$emit('refreshRecipes');
      } catch (err) {
        alert(err.response?.data || 'Failed to create recipe');
      }
    },
    resetForm() {
      this.newRecipe = {
        title: '',
        photo: '',
        preparation_time: null,
        instructions: [{ step: '' }],
        ingredients: [{ id: null, name: '', amount: '', unit: '' }],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: false
      };
    }
  }
};
</script>
