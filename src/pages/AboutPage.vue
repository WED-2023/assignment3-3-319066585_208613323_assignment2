<template>
  <div class="container mt-5">
    <h1 class="mb-4">About the Project</h1>

    <section class="mb-5">
      <h3>Meet the Team</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our team is composed of passionate developers...
      </p>
    </section>

    <section>
      <h3>Previous Exercises</h3>
      <ul>
        <li><a href="#" target="_blank">Exercise 1 - Login/Register Page</a></li>
        <li><a href="#" target="_blank">Exercise 2 - Recipe API Integration</a></li>
        <li><a href="#" target="_blank">Exercise 3 - Favorites and Likes</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
