<template>
  <div id="starred">
    <h1>Starred Repositories</h1>
    <div id="json-tree">
      <h5>List of Repositories you have starred</h5>
  <tree-view :data="repoData" :options="{maxDepth: 1, link: true}"></tree-view>
</div>
  </div>
</template>

<script>
import repository from "../services/repo/UserReposityService"
export default {
  name: 'starred-component',
  data(){
    return {
      repoData:{}
    }
  },
    async created(){
        console.log(process.env.VUE_APP_ROOT_API)
        await this.getStarredRepoInfo();
  },
  methods:{
    async getStarredRepoInfo(){
      try{
      this.repoData = await repository.getStarredRepoInfo();
      }
      catch(error){
        alert(error)
      }
    }
  }
}
</script>

<style>
#json-tree {
  text-align: left;
}
</style>
