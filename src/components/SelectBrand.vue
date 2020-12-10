<template>
  <div>
    <label class="text-primary"><b>Filtrar por marca</b></label>
    <el-select v-model="value" clearable placeholder="Selecionar Marca" class="w-100">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: "almay", name: "Almay" },
        { value: "alva", name: "Alva" },
        { value: "covergirl", name: "Covergirl" },
        { value: "dalish", name: "Dalish" },
        { value: "colourpop", name: "Colourpop" },
      ],
      value: "almay",
    };
  },
  watch: {
    value() {
      this.$emit("buscarBrand", this.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
