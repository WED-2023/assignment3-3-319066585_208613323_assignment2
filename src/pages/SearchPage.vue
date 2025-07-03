<template>
  <div class="container mt-4">
    <h1 class="title text-center mb-4">Search Page</h1>

    <b-form @submit.prevent="searchRecipes">
      <div class="d-flex flex-wrap justify-content-center align-items-end gap-3 mb-4">
        <b-form-input
          v-model="query"
          placeholder="Search Recipes"
          class="flex-grow-1"
        />
        <b-form-group label="Cuisine:" class="mb-0 flex-grow-1"> 
          <b-form-select 
            v-model="cuisine"
            :options="cuisineOptions"
            class="flex-grow-1"
          />
        </b-form-group>
          <b-form-group label="Diet:" class="mb-0 flex-grow-1">
            <b-form-select
              v-model="diet"
              :options="dietOptions"
              class="flex-grow-1"
            />
        </b-form-group>

        <b-form-group label="Intolerances:" class="mb-0 flex-grow-1">
          <b-form-checkbox-group
            v-model="intolerances"
            :options="ingredients"
            name="intolerances"
            buttons
            button-variant="outline-primary"
            class="d-flex flex-wrap gap-2"
          />
        </b-form-group>
        <b-form-group label="Number of Results:" class="mb-0 flex-grow-1">
          <b-form-select
            v-model="numberOfResults"
            :options="[5, 10, 15]"
            class="flex-grow-1"
          />
        </b-form-group>

        <b-button type="submit" variant="warning" class="px-4">
          <b-icon icon="search" class="me-1"></b-icon> Search
        </b-button>
      </div>
    </b-form>

    <div v-if="isLoading" class="alert alert-info mt-3 text-center">Searching...</div>
    <div v-if="error" class="alert alert-danger mt-3 text-center">{{ error }}</div>
    <div v-if="results.length === 0 && !isLoading" class="mt-3 text-center">No results found.</div>

    <div class="row mt-4">
      <div v-for="recipe in results" :key="recipe.id" class="col-md-4 mb-4">
        <RecipePreview :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import RecipePreview from '@/components/RecipePreview.vue';

export default {
  name: 'SearchPage',
  components: { RecipePreview },
  setup() {
    const query = ref('');
    const cuisine = ref('');
    const diet = ref('');
    const intolerances = ref([]);

    const cuisineOptions = ['', 'African', 'Asian', 'American', 'British', 'Cajun', 'Caribbean', 'Chinese', 'Eastern European', 'European', 'French', 'German',
      'Greek', 'Indian', 'Irish', 'Italian', 'Japanese', 'Jewish', 'Korean', 'Latin American', 
      'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic', 'Southern', 'Spanish', 'Thai', 'Vietnamese'
    ];
    const dietOptions = ['', 'Ketogenic', 'Paleo', 'Vegetarian', 'Vegan', 'Whole30', 'Gluten Free', 'Low FODMAP', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Pescetarian', 'Primal'];

    const results = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const numberOfResults = ref(5);
    const ingredients = ['Dairy', 'Egg', 'Gluten', 'Grain', 'Peanut', 'Seafood', 'Sesame', 'Shellfish', 'Soy', 'Sulfite', 'Tree Nut', 'Wheat'];

    const searchRecipes = async () => {
      isLoading.value = true;
      error.value = null;
      try {
        const response = await window.axios.get('/recipes/search', {
          params: {
            query: query.value,
            cuisine: cuisine.value,
            diet: diet.value,
            intolerances: intolerances.value.join(','),
            number: numberOfResults.value,
          },
        });
        results.value = response.data;
      } catch (err) {
        error.value = err.response?.data?.message || 'Search failed.';
      } finally {
        isLoading.value = false;
      }
    };

    return {
      query,
      cuisine,
      diet,
      intolerances,
      ingredients,
      numberOfResults,
      cuisineOptions,
      dietOptions,
      results,
      isLoading,
      error,
      searchRecipes,
    };
  },
};
</script>

<style scoped>
.b-form-checkbox-group .btn {
  min-width: 120px;
  font-size: 0.9rem;
}
</style>