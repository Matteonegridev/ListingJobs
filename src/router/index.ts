import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import AddJobsView from "../views/AddJobsView.vue";
import JobReadMore from "../views/JobReadMore.vue";

export const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/jobs", name: "Jobs", component: JobsView },
  { path: "/jobs/:view", name: "Jobs View", component: JobReadMore },
  { path: "/jobs/:id", name: "Add Jobs", component: AddJobsView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
