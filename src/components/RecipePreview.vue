<template>

  <router-link :to="`/recipes/${recipe.id}`" class="card card-hover h-100 text-decoration-none text-dark">
    <img
      v-if="recipe.image"
      :src="recipe.image"
      class="card-img-top recipe-image"
      alt="Recipe image"
    />
    <div class="card-body text-center">
      <h5 class="card-title">{{ recipe.title }}</h5>
        <div class="recipe-info">
          <div><strong>Ready in:</strong> {{ recipe.readyInMinutes }} minutes</div>
          <!-- <div><strong>Likes:</strong> {{ recipe.aggregateLikes }} likes</div> -->
           <div>
            <strong>Likes: </strong>{{ recipe.aggregateLikes ?? recipe.popularity ?? 0 }} likes
          </div>

          <div class="tags">
            <span v-if="recipe.vegan" class="tag vegan">🌱 Vegan</span>
            <span v-if="recipe.vegetarian" class="tag vegetarian">🥦 Vegetarian</span>
            <span v-if="recipe.glutenFree" class="tag glutenfree">🚫 Gluten</span>
            <LikeButton
              :recipeId="recipe.id"
              :initialLiked="recipe.isLiked"
              :initialLikes="recipe.aggregateLikes"
              @like-toggled="handleLikeToggled"
            />
          </div>
      </div>
    </div>
  </router-link>
</template>



<script>
  import LikeButton from './LikeButton.vue';
  export default {
    components: {
      LikeButton
    },
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
  .card-hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card-hover:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  .recipe-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
  }

  .card-hover:hover .recipe-image {
    opacity: 0.7;
  }

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
</style>
