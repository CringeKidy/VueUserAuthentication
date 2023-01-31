<template>
  <input type="button" value="Register" @click="Register(username, password)" />
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterButton",
  props: {
    username: String,
    password: String,
  },
  methods: {
    async Register(username, password) {
      const result = await axios({
        method: "POST",
        url: process.env.VUE_APP_BACKEND_URI + "/register",
        data: {
          Userdata: [{ username: username }, { password: password }],
        },
      });

      if (result.status === 201) {
        this.$store.commit("userExists", result.status);
      }

      if (result.status === 404) {
        alert("There was an error during your request");
      }

      if (result.status === 200) {
        await alert(
          "Succsuflly Registerd (this page will now redirect to login page"
        );
        this.$store.commit("userExists", result.status);

        this.$router.push("/");
      }
    },
  },
};
</script>