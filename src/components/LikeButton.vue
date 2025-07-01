<template>
  <button
    @click="toggleLike"
    :class="['like-button', { liked }]"
  >
    👍 {{ liked ? 'Liked' : 'Like' }}
  </button>
</template>

<script>
export default {
  props: ["recipeId", "initialLiked", "initialLikes"],
  data() {
    return {
      liked: this.initialLiked,
      likes: this.initialLikes
    };
  },
  methods: {
    async toggleLike() {
      try {
        const method = this.liked ? "delete" : "post";
        if (window.store.username) {
            console.log("User is logged in:", window.store.username);
        } else {
            console.log("User is not logged in");
        }
        if (!window.store.username) {
          alert("You must be logged in to like a recipe.");
          return;
        }

        await this.axios({
          method,
          url: this.$root.store.server_domain + "/recipes/like/" + this.recipeId,
          withCredentials: true
        });
        this.liked = !this.liked;
        this.likes += this.liked ? 1 : -1;
        this.$emit("like-toggled", this.liked);
      } catch (err) {
        alert("Error toggling like");
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.like {
    display: inline-flex;
}


.like-button {
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.9em;
  border: 2px solid #4267B2;
  background-color: white;
  color: #4267B2;
  cursor: pointer;
  transition: 0.3s;
}

.like-button:hover {
  background-color: #e6f0ff;
}

.like-button.liked {
  background-color: #007bff;
  color: white;
}


</style>
