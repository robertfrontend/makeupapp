<template>
  <div class="header">
    <b-row align-h="between" align-v="center" class="px-4 py-4">
      <b-col cols="auto">
        <h4><b>Makeup App💅</b></h4></b-col
      >
      <b-col cols="auto"
        ><h4 class="m-0"><i v-b-toggle.sidebar-1 class="fas fa-ellipsis-h px-2 m-0"></i></h4
      ></b-col>

      <Sidebar />
    </b-row>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: "Header",
  components: {
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #f4d9e0;
  color: white;
}
</style>
