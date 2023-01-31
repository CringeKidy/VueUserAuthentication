<template>
  <div class="home">
    <h1>Welcome to this website!</h1>
    <h2>Please make your self welcome</h2>

    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "HomeView",
  components: {
    LoginForm,
  },
};
</script>
