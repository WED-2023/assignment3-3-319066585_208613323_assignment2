import Main from "../pages/MainPage.vue";
import NotFound from "../pages/NotFoundPage.vue";


const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/RegisterPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/LoginPage.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../pages/SearchPage.vue"),
  },
  {
    path: "/recipes/:recipeId",
    name: "RecipeView",
    component: () => import("../pages/RecipeViewPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFound,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../pages/FavoriteRecipesPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: '/myRecipes',
    name: 'create-recipe',
    component: () => import('../pages/CreateRecipePage.vue')
  },
  {
    path: '/myRecipes',
    name: 'view-my-recipes',
    component: () => import('../pages/MyRecipesPage.vue')
  },
  {
    path: '/myRecipes/:recipeId',
    name: 'view MyRecipe',
    component: () => import('../pages/MyRecipeViewPage.vue')
  }

];

export default routes;
