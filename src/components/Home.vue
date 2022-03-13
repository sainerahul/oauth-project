<template>
  <div id="home">
    <h1><b>Oauth Github</b></h1>
    <div v-if="!this.isLogged">
      <small>Not Logged In? </small>
      <button type="button" @click="clickLogin()">Login</button>
    </div>
    <div v-else>
      <button type="button" @click="clickLogout()">Logout</button>
    </div>
  </div>
</template>

<script>
import auth from "../authenitcation/index";

export default {
  name: "home-component",
  data() {
    return {
      isLogged: auth.isLoggedIn(),
    };
  },
  created() {},
  methods: {
    clickLogin() {
      auth.login();
    },
    clickLogout() {
      auth.logout();
      this.isLogged = false;
    },
  },
};
</script>

<style></style>
