<template>
  <div class="home">
    <div class="backg">
      <b-container>
        <b-row class="descripcion text-center mt-4">
          <b-col class="my-2" cols="auto">
            <h3>
              <b>
                Encuentra productos de todas las marcas de maquillajes y
                estilos!
              </b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laudantium, officia quos eum optio veritatis accusamus iure odio
              quibusdam dolore.
            </p>
          </b-col>
          <b-col class="mt-4">
            <h3><i class="fas fa-chevron-circle-down"></i></h3>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="mt-4">
      <div class="text-center">
        <h4>Categorias</h4>
      </div>
      <b-row class="mt-4" align-v="center" align-h="center">
        <b-col cols="auto" v-for="dat in Tags" :key="dat.value">
          <b-button variant="outline-dark"> {{ dat.name }} </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col
          class="my-4"
          cols="auto"
          v-for="product in datosAPI"
          :key="product.id"
        >
          <div class="card py-4 px-4">
            <b-row>
              <b-col cols="12" class="text-center">
                <img width="50%" :src="product.image_link" alt="" />
              </b-col>
              <b-col cols="12">
                <h5>
                  <b> {{ product.name }}</b>
                </h5>
                <p>
                  👉 <b>{{ product.brand }}</b>
                </p>
                <p>
                  $<b>{{ product.price }}</b>
                </p>
              </b-col>
            </b-row>
            <p class="my-2">Colores:</p>
            <b-row>
              <b-col cols="auto" v-for="(color, index) in product.product_colors" :key="index" >
                <div class="spanColor" :style="'background:'+ color.hex_value" ></div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
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
    };
  },
  components: {},
  created() {
    console.log("cargando...");
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=almay")
      .then((res) => {
        let datos = res.data;
        datos.map((res) => {
          this.datosAPI.push(res);
        });

        console.log(res.data);
        console.log("finally...");
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};
</script>
<style lang="scss" scoped>
.backg {
  width: 100%;
  height: 50vh;
  background: url("../assets/img1.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
p {
  margin: 0;
}
.spanColor{
  width: 25px;
  height: 25px;
  border-radius: 25px;
}
</style>
