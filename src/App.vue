<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss">
body {
  overflow-x: hidden;
  scroll-behavior: auto;
  scroll-behavior: smooth;
}
html {
  scroll-behavior: auto;
  scroll-behavior: smooth;
}
* {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
