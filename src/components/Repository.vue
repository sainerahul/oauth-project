<template>
  <div id="profile">
    <h1>Your Repositories</h1>
    <div id="json-tree">
      <h5>Select the type of repository you want to view</h5>

      <select
        v-model="selectedValue"
        name="VisibilityType"
        @change="onChangeValue()"
        class="form-control"
      >
        <option value="all">All</option>
        <option value="private">Private</option>
        <option value="public">Public</option>
      </select>
      <h5>Sorting option</h5>

      <select
        v-model="selectedSorting"
        name="SortingType"
        @change="onChangeValue()"
        class="form-control"
      >
        <option value="created">Creation Date</option>
        <option value="updated">Update Date</option>
        <option value="pushed">Pushed</option>
      </select>
      <h2>Repository:</h2>

      <tree-view
        :data="repoData"
        :options="{ maxDepth: 1, link: true }"
      ></tree-view>
    </div>
  </div>
</template>

<script>
import repository from "../services/repo/UserReposityService";
export default {
  name: "repository-component",
  data() {
    return {
      selectedValue: "all",
      selectedSorting: "updated",
      repoData: {},
    };
  },
  async created() {
    await this.getRepoInfo(this.selectedValue, this.selectedSorting);
  },
  methods: {
    async onChangeValue() {
      await this.getRepoInfo(this.selectedValue, this.selectedSorting);
    },
    async getRepoInfo(visibility, sorting) {
      try {
        this.repoData = await repository.getRepoInfo(visibility, sorting);
      } catch (error) {
        alert(`Something went wrong`);
        this.$router.push("/");
        throw TypeError(new Error(error));
      }
    },
  },
};
</script>

<style>
#json-tree {
  text-align: left;
}
</style>
