<template>
  <div>
    <b-row>
      <b-col cols="12" v-if="selectBusqueda">
        <label class="text-dark"><b>Filtrar por marca</b></label>
        <el-select v-model="value" placeholder="Selecionar Marca" class="w-100">
          <el-option
            v-for="item in optionSelect[0]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </b-col>
      <b-col cols="12" class="mt-2 text-center" v-if="activado">
        <span class="cursor-pointer text-dark" @click="reiniciar"
          ><b> <i class="fa fa-undo-alt"></i> </b
        ></span>
      </b-col>

      <b-col cols="12" class="mt-3" v-if="campoBusqueda">
        <el-input placeholder="Please input" v-model="busquedaInput"></el-input>
        <button class="btn btn-primary w-100 mt-2" @click="buscar">Buscar</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    campoBusqueda: {
      default: false,
      type: Boolean,
    },
    selectBusqueda: {
      default: true,
      type: Boolean,
    },

    optionSelect: {
      default: () => [],
      type: Array
    }
  },
  data() {
    return {
      value: "almay",
      activado: false,

      busquedaInput: "",
    };
  },

  watch: {
    value() {
      this.$emit("buscarSelect", this.value);
      this.activado = true;
    },
  },

  methods: {
    reiniciar() {
      this.activado = false;
      this.$emit("buscarSelect", this.value);
    },

    buscar() {
      this.$emit("buscarInput", this.busquedaInput);
    },
  },
};
</script>

<style lang="scss" scoped></style>
