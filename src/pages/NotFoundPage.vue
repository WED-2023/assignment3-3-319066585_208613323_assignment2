<template>
  <div class="not-found">
    <h1>404 - Page Not Found 😢</h1>
    <p>The page you're looking for doesn't exist.</p>
    <router-link to="/" class="btn btn-warning mt-3">
      🏠 Go back to Homepage
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 4rem 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.not-found h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.2rem;
  color: #666;
}

.btn {
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
}
</style>