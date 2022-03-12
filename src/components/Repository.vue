<template>
  <div id="profile">
    <h1>Repository</h1>
    <p>{{repoData}}</p>
  </div>
</template>

<script>
import repository from "../services/repo/UserReposityService"

export default {
  name: 'repository-component',
  data(){
    return {
      repoData:{}
    }
  },
    async created(){
        this.repoData = await repository.getRepoInfo();
        console.log(this.repoData)
  }
}
</script>

<style>

</style>
