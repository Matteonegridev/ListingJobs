Playing around with Vue.
Project realized from a challenge.

### Key Points:

1. use of vue-router:

```js
export const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/jobs", name: "Jobs", component: JobsView },
  { path: "/jobs/:view", name: "Jobs View", component: JobReadMore },
  { path: "/jobs/edit/:view", name: " Edit", component: EditJobsView },
  { path: "/jobs/add", name: "Add Jobs", component: AddJobsView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
```

We define a route path in our index.ts.

2.

```js
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

```

`<RouterView />` no need imports, used similarly to "outlet" in react-router. It will show in this case the route path we set in index.ts

3. create a call to edit data:

```js
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${routePath}`);
    state.job = response.data;
    //populate the inputs with the call we just made:
    data.title = state.job?.title;
    data.type = state.job?.type;
    data.location = state.job?.location;
    data.description = state.job?.description;
    data.salary = state.job?.salary;
    data.company.name = state.job?.company.name;
    data.company.description = state.job?.company.description;
    data.company.contactEmail = state.job?.company.contactEmail;
    data.company.contactPhone = state.job?.company.contactPhone;
  } catch (error) {
    throw new Error("Error");
  } finally {
    state.isLoading = false;
  }
});
```

`axios.get` will take the data we need, we need to insert also the relative path to it and populate it.

4. same way, we delete data:

```js
const removeJob = async () => {
  if (!singleJob.value) return;

  try {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (confirm) {
      const deletion = await axios.delete(`/api/jobs/${pathRoute}`);
      jobs.value = jobs.value.filter(
        (entry) => entry.id !== singleJob.value.id,
      );
      router.push("/jobs");
      toast.success("Job Deleted");
      return deletion.data;
    } else {
      return;
    }
  } catch (error) {
    toast.error("Job Not Deleted");
    throw new Error("Error deleting job");
  }
};
```

To remove the data we must call a promise that will actually delete the data from the backend. It's not only the matching id because we are not talking about an array or object we have stored into a variable.
