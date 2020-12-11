<template>
  <div class="card  py-3 px-4">
    <b-row>
      <b-col cols="12" class="text-center">
        <img width="50%" :src="datos.image_link" :alt="datos.brand" />
      </b-col>
      <b-col cols="12" class="mt-2 ">
        <h5>
          <b> {{ datos.name }}</b>
        </h5>
        <p>👉 {{ datos.brand }}</p>
        <p>Tipo de Producto: {{datos.product_type }} </p>
        <p>
          $<b>{{ datos.price }}</b>
        </p>
        <a :href="datos.product_link" target="_blank"> Ir a comprar </a>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        class="my-2"
        cols="auto"
        v-for="(color, index) in datos.product_colors"
        :key="index"
      >
        <div class="spanColor" :style="'background:' + color.hex_value"></div>
      </b-col>
      <b-col v-if="openDet" cols="12" class="mt-2">
        <p>{{ datos.description }}</p>
      </b-col>
      <b-col cols="12" class=" text-center">
        <span class="text-primary cursor-pointer " @click="openDetails">
          <template v-if="openDet === false">Ver Mas</template>
          <template v-if="openDet === true">Ocultar</template>
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    datos: Object,
  },
  data() {
    return {
      openDet: false,
    };
  },
  methods: {
    openDetails() {
      this.openDet = !this.openDet;
    },
  },
};
</script>

<style lang="scss" scoped>
.spanColor {
  width: 25px;
  height: 25px;
  border-radius: 25px;
}
p {
  margin: 0;
}
</style>
