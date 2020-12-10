<template>
  <div class="home">
    <div class="backg">
      <b-container>
        <b-row class="descripcion text-center">
          <b-col class="my-2" cols="auto">
            <h3>
              <b> Encuentra productos de todas las marcas de maquillajes y estilos! </b>
            </h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="mt-4">
      <div class="text-center">
        <h4>Categorias</h4>
      </div>
      <b-row class="mt-4" align-v="center" align-h="center">
        <b-col cols="12" class="mb-4">
          <SelectBrand @buscarBrand="buscarBrand" />
        </b-col>
      </b-row>

      <div class="text-center mt-4">
        <b-spinner variant="primary" v-if="loading" label="Loading..."
          >Cargando...</b-spinner
        >
      </div>

      <b-row class="mt-4" id="product">
        <b-col cols="12">
          <h3>
            <b>{{ marcaEliga }}</b>
          </h3>
        </b-col>
        <b-col class="my-4" cols="auto" v-for="product in limiteDiez" :key="product.id">
          <Card :datos="product" />
        </b-col>
        <b-col cols="12" class="text-center mb-4">
          <a
            variant="outline-primary"
            @click="setMas"
            v-if="mostrarMas && limiteDiez.length != 0"
            href="#product"
          >
            <i class="fas fa-plus mr-1"></i> Mas
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
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      Tags: [
        { value: "almay", name: "Almay" },
        { value: "alva", name: "Alva" },
        { value: "covergirl", name: "Covergirl" },
      ],
      datosAPI: [],
      loading: false,
      error: false,

      marcaEliga: null,

      mostrarMas: false,
    };
  },
  components: { Card, SelectBrand },
  created() {
    this.llamarApi("almay");
    if (this.$router === "/product") {
      this.$router.push("/");
    }
  },
  methods: {
    // funcion del select
    buscarBrand(dato) {
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

          console.log(res.data);

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
      const array = arrayLimit.slice(10, Infinity);

      this.datosAPI = array;
    },

    mostrarError() {
      this.error = true;
      this.$notify.error({
        title: "Error",
        message: "Producto no encontrado",
        position: "bottom-right",
      });
    },
  },
  computed: {
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
  height: 40vh;
  background: url("../assets/img1.png");
  background-size: cover;
  background-position: top;
}
p {
  margin: 0;
}
</style>
