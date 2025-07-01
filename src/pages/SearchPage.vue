<template>
  <div class="container mt-4">
    <h1 class="title">Search Page</h1>

    <b-form @submit.prevent="searchRecipes">
      <div class="row g-3 align-items-end">
        <div class="col-md-4">
          <b-form-group label="Search for recipes:">
            <b-form-input
              v-model="query"
              placeholder="Enter keyword (e.g., pizza)"
              class="form-control"
            />
          </b-form-group>
        </div>

        <div class="col-md-2">
          <b-form-group label="Cuisine:">
            <b-form-select
              v-model="cuisine"
              :options="cuisineOptions"
              class="form-control"
            />
          </b-form-group>
        </div>

        <div class="col-md-2">
          <b-form-group label="Diet:">
            <b-form-select
              v-model="diet"
              :options="dietOptions"
              class="form-control"
            />
          </b-form-group>
        </div>

        <div class="col-md-4">
          <b-form-group label="Intolerances:">
            <b-form-checkbox-group
              v-model="intolerances"
              :options="ingredients"
              stacked
              class="form-control"
            />
          </b-form-group>
        </div>

        <b-form-group label="Number of Results:">
          <b-form-select
            v-model="numberOfResults"
            :options="[5, 10, 15, 50]"
            class="form-control"
          />
        </b-form-group>

        <div class="col-md-1">
          <b-button type="submit" variant="primary" class="w-100">Search</b-button>
        </div>
      </div>
    </b-form>

    <div v-if="isLoading" class="alert alert-info mt-3">Searching...</div>
    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    <div v-if="results.length === 0 && !isLoading" class="mt-3">No results found.</div>

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

    console.log(window.store.username);

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
