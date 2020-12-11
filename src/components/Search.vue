<template>
  <div>
    <el-input placeholder="Buscar un producto" v-model="busqueda"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: "",
    };
  },
  watch: {
    busqueda() {
      console.log("buscando...");
      this.$emit("buscarWatch", this.busqueda);
    },
  },
};
</script>

<style lang="scss" scoped></style>
