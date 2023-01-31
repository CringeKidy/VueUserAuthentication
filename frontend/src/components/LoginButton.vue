<template>
  <div>
    <button type="button" @click="postButton(username, password)">Login</button>
    <button @click="Register()">Register</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginButton",
  props: {
    username: String,
    password: String,
  },
  methods: {
    async postButton(Uname, Pswd) {
      if ((Uname, Pswd == null)) {
        return alert("Please put in username and password");
      }

      const login = await axios({
        method: "post",
        url: process.env.VUE_APP_BACKEND_URI + "/login",
        data: {
          User: [{ Username: Uname }, { Password: Pswd }],
        },
      });

      let result = await login.data.UserExists;

      if (result === 200) {
        this.$router.push("/loginpage");
        return this.$store.commit("changestate", result);
      }

      if (result === 404) {
        this.$store.commit("changestate", result);
      }
    },
    Register() {
      this.$router.push("/registerpage");
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>

