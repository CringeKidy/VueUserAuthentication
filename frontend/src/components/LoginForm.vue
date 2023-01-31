<template>
  <div>
    <form>
      <p>Login form</p>
      <ul>
        <li>Username</li>
        <li>
          <input type="text" v-model="usernameInput" placeholder="Username" />
        </li>
        <li>Password</li>
        <li>
          <input
            type="password"
            v-model="passwordInput"
            placeholder="Password"
          />
        </li>
        <li>
          <LoginButton
            :username="usernameInput"
            :password="passwordInput"
            :LoginVaild="Vaild"
          />
        </li>
      </ul>
    </form>

    <p v-if="this.$store.state.loginVaild">
      Username or password was not correct.
    </p>
  </div>
</template>

<style>
ul {
  list-style: none;
}
</style>


<script>
import LoginButton from "./LoginButton.vue";
export default {
  name: "LoginForm",
  components: {
    LoginButton,
  },
  data() {
    return {
      usernameInput: null,
      passwordInput: null,
      Vaild: true,
    };
  },
};
</script>