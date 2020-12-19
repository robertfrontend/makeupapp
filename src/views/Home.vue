<template>
  <div class="home">
    <div class="backg pt-4 mb-md-4">
      <b-container>
        <b-row class="descripcion text-center" align-h="center" align-v="center">
          <b-col class="my-2 mt-4" cols="auto" md="6">
            <h3>
              <b> Encuentra productos de todas las marcas de maquillajes y estilos! </b>
            </h3>
          </b-col>
          <b-col class="d-none d-md-block" md="6">
            <img width="50%" src="../assets/img1.png" alt="" />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="mt-4 mt-md-5 pt-md-5">
      <b-row class="mt-4 pt-md-5" align-v="center" align-h="center">
        <b-col cols="12" md="6" class="text-center" id="product">
          <h4>Categorias</h4>
        </b-col>

        <b-col cols="12" md="6" class="mb-4 text-center">
          <router-link to="/todosProducto" class="btn btn-dark">
            <i class="far fa-hand-pointer mr-2"></i>Ver todos los produtos
          </router-link>
        </b-col>

        <b-col cols="12" md="6" class="mb-4">
          <SelectBrand @buscarSelect="buscarSelect" :optionSelect="[optionSelect]" class="w-100" />
        </b-col>
        <b-col cols="12" md="6" class="text-center">
          <span class="text-primary">
            <i class="fas fa-arrow-down mr-1"></i>
            Resultados de:
            <b> {{ marcaEliga }}</b>
          </span>
        </b-col>
      </b-row>

      <div class="text-center mt-4">
        <Loading v-if="loading" />
      </div>

      <b-row class="mt-4">
        <b-col
          class="my-4"
          cols="12"
          md="6"
          v-for="product in limiteDiez"
          :key="product.id"
        >
          <Card :datos="product" />
        </b-col>
        <b-col cols="12" class="text-center mb-4">
          <a
            variant="outline-primary"
            @click="setMas"
            v-if="mostrarMas && limiteDiez.length != 0"
            href="#product"
          >
            <i class="fas fa-arrow-right mr-1"></i>
          </a>
        </b-col>
      </b-row>

      <div class="text-center" v-if="limiteDiez.length === 0 && loading != true">
        <div class="text-center mb-3">
          <span class="text-warning">Ya no hay mas productos</span>
        </div>
        <b-button @click="llamarApi('almay')" variant="outline-primary">
          <i class="fas fa-home mr-1"></i> volver
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import SelectBrand from "@/components/SelectBrand.vue";
import Card from "@/components/Card.vue";
import Loading from "../components/layout/Loading.vue";
export default {
  name: "Home",
  components: { Card, SelectBrand, Loading },
  data() {
    return {
      optionSelect: [
        { value: "almay", name: "Almay" },
        { value: "alva", name: "Alva" },
        { value: "covergirl", name: "Covergirl" },
        { value: "dalish", name: "Dalish" },
        { value: "colourpop", name: "Colourpop" },
      ],

      datosAPI: [],
      loading: false,
      error: false,

      marcaEliga: null,

      mostrarMas: false,
    };
  },
  created() {
    this.llamarApi("almay");
    if (this.$router === "/product") {
      this.$router.push("/");
    }
  },
  methods: {
    // funcion del select
    buscarSelect(dato) {
      this.llamarApi(dato);
    },

    // funcion global para llamar a la api
    llamarApi(url) {
      this.datosAPI = [];
      this.loading = true;
      axios
        .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${url}`)
        .then((res) => {
          this.loading = false;
          let datos = res.data;
          this.mostrarMas = false;

          this.marcaEliga = url;

          datos.map((dt) => {
            this.datosAPI.push(dt);
          });
          // validar que la api traiga datos
          if (res.data.length === 0) {
            this.mostrarError();
          }

          // mostrar boton de ver mas productos
          if (res.data.length > 10) {
            this.mostrarMas = true;
          }
        })
        .catch((erro) => {
          console.log(erro);
          this.loading = false;
        });
    },

    // funcion para mostrar mas
    setMas() {
      let arrayLimit = this.datosAPI;
      const array = arrayLimit.slice(10);

      this.datosAPI = array;
    },

    // mostrar error cuando pase algun error
    mostrarError() {
      this.error = true;
      this.$notify.error({
        title: "Error",
        message: "Producto no encontrado",
        position: "top-right",
      });
    },
  },
  computed: {
    // limitar los productos
    limiteDiez() {
      let arrayLimit = this.datosAPI;
      const array = arrayLimit.slice(0, 10);

      return array;
    },
  },
};
</script>
<style lang="scss" scoped>
.backg {
  width: 100%;
  height: 30vh;
  @media screen and(max-width: 800px) {
    height: 40vh;
    background: url("../assets/img1.png");
    background-size: cover;
    background-position: center;
  }
}
p {
  margin: 0;
}
</style>
