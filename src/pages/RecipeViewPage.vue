<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1 class="text-center">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="recipe-image" />
      </div>

      <div class="recipe-info">
        <div><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</div>
        <div><strong>Likes:</strong> {{ recipe.aggregateLikes }} likes</div>
        <div class="tags">
          <span v-if="recipe.vegan" class="tag vegan">🌱 Vegan</span>
          <span v-if="recipe.vegetarian" class="tag vegetarian">🥦 Vegetarian</span>
          <span v-if="recipe.glutenFree" class="tag glutenfree">🚫 Gluten</span>
        </div>
      </div>

      <LikeButton
        :recipeId="recipe.id"
        :initialLiked="recipe.isLiked"
        @like-toggled="recipe.isLiked = $event"
      />


      <div class="recipe-body">
        <div class="row">
          <div class="col-md-6">
            <h4>Ingredients</h4>
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.amount }} {{ r.unit }} {{ r.name }}
              </li>
            </ul>
          </div>

          <div class="col-md-6">
            <h4>Instructions</h4>
            <ol>
              <li v-for="s in recipe.instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import LikeButton from "@/components/LikeButton.vue";

export default {
  data() {
    return {
      recipe: null
    };
  },
  components: {
    LikeButton,
  },
  async created() {
    try {
      let response;

      try {
        response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId
        );

        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response?.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        instructions,
        ingredients,
        popularity: aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response.data.recipe;

      let _recipe = {
        id: response.data.recipe.id,
        isLiked: response.data.recipe.isLiked ?? false,
        vegan: response.data.recipe.vegan,
        vegetarian: response.data.recipe.vegetarian,
        glutenFree: response.data.recipe.glutenFree,
        instructions,
        extendedIngredients: ingredients,
        aggregateLikes: aggregateLikes ?? 0,
        readyInMinutes,
        image,
        title
      };
      


      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.recipe-image {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.recipe-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.1em;
  margin-bottom: 20px;
  text-align: center;
}

.tags {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.tag {
  padding: 5px 10px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 0.9em;
}

.vegan {
  background-color: #4caf50;
}
.vegetarian {
  background-color: #8bc34a;
}
.glutenfree {
  background-color: #ffc022;
}

.row {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.col-md-6 {
  flex: 1;
  min-width: 250px;
}
ul,
ol {
  padding-left: 20px;
}
</style>

