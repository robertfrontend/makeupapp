<template>
  <div>
    <h1>Todos los productos</h1>
    <b-row>
      <b-col cols="12" class="mt-3">
        <SelectBrand
          :selectBusqueda="false"
          :campoBusqueda="true"
          @buscarInput="buscarInput"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SelectBrand from "../components/SelectBrand.vue";
export default {
  name: "todoProducto",
  components: { SelectBrand },
  data() {
    return {};
  },
  methods: {
    buscarInput(dato) {
      console.log(dato, "buscando por input");
    },
  },
};
</script>

<style lang="scss" scoped></style>
