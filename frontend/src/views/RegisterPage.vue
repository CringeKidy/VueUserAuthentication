<template>
  <div>
    <h1>Welcome!!</h1>
    <h2>This is were you can register you self to join my awesome website</h2>
    <h3>Please use the form below and enter yourself.</h3>

    <nav>
      <router-link to="/">Home</router-link>
    </nav>

    <form>
      <ul>
        <li><label> Please Put in username here</label></li>
        <li>
          <input v-model="username" type="textbox" placeholder="Username" />
        </li>
        <li><label> Please Put in Password here</label></li>
        <li><input v-model="password" placeholder="Password" /></li>
        <li><RegisterButton :username="username" :password="password" /></li>
      </ul>
    </form>

    <p v-if="this.$store.state.userExists">
      Username is already in use. Please use an other
    </p>
  </div>
</template>

<script>
import RegisterButton from "../components/RegisterButton.vue";

export default {
  name: "RegisterPage",
  components: {
    RegisterButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {},
};
</script>