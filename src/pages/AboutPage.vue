<template>
  <div class="about-container">
    <h1 class="main-title">About Us 🔍</h1>

    <p class="intro">
      This project was developed as part of the <strong>Web Development Environments</strong> course at
      <strong>Ben-Gurion University</strong>.<br />
      The site was created by <strong>Tamir Cohen</strong> and <strong>Yehezkel Kadosi</strong>,
      third-year students in the Department of Information Systems Engineering.
    </p>

    <div class="card">
      <h2>🍲About the Project – Grandma's Recipes and Beyond </h2>
      <p>
        Our project was born from a shared love for good food and the joy of sharing recipes —
        whether it’s nostalgic dishes from Grandma’s kitchen or modern culinary creations.
        This is an interactive and user-friendly recipe website that allows users to discover
        random recipes, search by dietary preferences, view recently watched recipes,
        and even create and submit their own.
      </p>
      <p>
        We focused on building a smooth, accessible, and visually engaging user interface,
        with clean design and responsive layout. Our goal is to create an inviting platform
        for cooking enthusiasts of all levels — to spark inspiration and encourage creativity
        in the kitchen.
      </p>
    </div>

    <div class="card">
      <h2>📘 Our Projects</h2>
      <ul>
        <li>
          Tamir’s first project:
          <a href="https://github.com/WED-2023/208613323" target="_blank">View Project</a>
        </li>
        <li>
          Yehezkel’s first project:
          <a href="https://github.com/WED-2023/319066585" target="_blank">View Project</a>
        </li>
        <li>
          Our joint project:
          <a href="https://github.com/WED-2023/assignment2-319066585_208613323_assignment2" target="_blank">View Project</a>
        </li>
      </ul>
    </div>

    <div class="card">
      <h2>💬 Reflections</h2>
      <p>
        Working together on this project was a great experience. We enjoyed combining creativity with problem-solving
        and learned a lot about web development environments—from structure and design to interactivity.
      </p>
      <p>
        The course has been both challenging and rewarding. It gave us the tools to bring our ideas to life in the
        browser and helped us appreciate the power of clean, responsive design.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.main-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card h2 {
  margin-bottom: 1rem;
}

.card a {
  color: #007bff;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}
</style>