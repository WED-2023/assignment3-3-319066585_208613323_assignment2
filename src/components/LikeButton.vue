<template>
  <div @click="toggleLike" style="cursor: pointer;">
    <span v-if="liked">👍 Liked ({{ likes }})</span>
    <span v-else>👍 Like ({{ likes }})</span>
  </div>
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
        if (this.$root.store.user) {
            console.log("User is logged in:", this.$root.store.user.username);
        } else {
            console.log("User is not logged in");
        }

        console.log('0');
        await this.axios({
          method,
          url: this.$root.store.server_domain + "/users/favorites",
          withCredentials: true
        });
        console.log('1');
        this.liked = !this.liked;
        this.likes += this.liked ? 1 : -1;
        this.$emit("like-toggled", this.liked);
        console.log('2');
      } catch (err) {
        alert("Error toggling like");
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.like-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4267B2;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.1s;
}

.like-button:hover {
  transform: scale(1.1);
}

.liked {
  color: #e0245e;
}

</style>
