<template>
  <div id="callback">
    <h1>Loading..</h1>
  </div>
</template>

<script>
import auth from "../authenitcation/index";
export default {
  name: "callback-component",
  data() {
    return {};
  },
  async created() {
    await this.getAccess();
  },
  methods: {
    async getAccess() {
      try {
        let code = this.$route.query.code;
        await auth.getAccessToken(code);
        this.$router.push("/profile");
      } catch (error) {
        alert(error);
        this.$router.push("/");
        auth.logout();
      }
    },
  },
};
</script>

<style></style>
