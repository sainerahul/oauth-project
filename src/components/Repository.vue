<template>
  <div id="profile">
    <h1>Your Repositories</h1>
    <div id="json-tree">
      <h5>Select the type of repository you want to view</h5>
    
      <select v-model="selectedValue" name="VisibilityType" @change="onChangeVisiblity()" class="form-control">
      <option value="all">All</option>
      <option value="private">Private</option>
      <option value="public">Public</option>
      </select>
      <h2>Repository:</h2>
    
  <tree-view :data="repoData" :options="{maxDepth: 1, link: true}"></tree-view>
</div>
  </div>
</template>

<script>
import repository from "../services/repo/UserReposityService"
export default {
  name: 'repository-component',
  data(){
    return {
      selectedValue:'all',
      repoData:{}
    }
  },
    async created(){
        await this.getRepoInfo(this.selectedValue);
  },
  methods:{
    async onChangeVisiblity(){
        await this.getRepoInfo(this.selectedValue);
    },
    async getRepoInfo(visibility){
      try{
      this.repoData = await repository.getRepoInfo(visibility);
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
