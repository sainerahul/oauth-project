<template>
  <div id="app">
    <div>
    <img alt="Vue logo" height="30px" src="./assets/logo.png">
    <br>
    <router-link to="/">Home</router-link> | 
    <router-link to="/profile">Profile</router-link> | 
    <router-link to="/repository">Repository</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import auth from "../src/authenitcation/index"
export default {
  data(){
    return{
      isLoggedIn:false
    }
  },
  created(){
    this.isLoggedIn = auth.isLoggedIn();
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
