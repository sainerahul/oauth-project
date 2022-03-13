<template>
  <div id="profile">
    <h1>Your Profile</h1>
    <div id="profile-list">
  <ul>
    <li v-for="(item,name,index) in userData" :key="index">{{name}}: {{ item }}</li>
  </ul>
    </div>
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
     await this.getUserInfo();
  },
  methods:{
    async getUserInfo(){
      try{
        this.userData = await profile.getUserInfo();
      }
      catch(error){
        alert(error)
      }
    }
  }
}
</script>

<style>
#profile-list {
  text-align: left;
}
</style>
