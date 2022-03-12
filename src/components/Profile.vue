<template>
  <div id="profile">
    <h1>Profile</h1>
  <ul style="list-style-type:none;">
    <li v-for="(item,name,index) in userData" :key="index">{{name}}: {{ item }}</li>
  </ul>
  </div>
</template>

<script>
import profile from "../services/user/UserProfileService"

export default {
  name: 'profile-component',
  data(){
    return {
      userData:{}
    }
  },
    async created(){
        this.userData = await profile.getUserInfo();
        console.log(this.userData)
  }
}
</script>

<style>

</style>
