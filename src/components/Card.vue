<template>
    <div class="card py-4 px-4">
      <b-row>
        <b-col cols="12" class="text-center">
          <img width="50%" :src="datos.image_link" alt="" />
        </b-col>
        <b-col cols="12" class="mt-2">
          <h5>
            <b> {{ datos.name }}</b>
          </h5>
          <p>
            👉 <b>{{ datos.brand }}</b>
          </p>
          <p>
            $<b>{{ datos.price }}</b>
          </p>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col
          cols="auto"
          v-for="(color, index) in datos.product_colors"
          :key="index"
        >
          <div class="spanColor" :style="'background:' + color.hex_value"></div>
        </b-col>
        <b-col cols="12" class="mt-3 text-center">
          <i class="fas fa-plus mt-2 mr-1" @click="openDetails" ></i> 
        </b-col>
        <b-col v-if="openDet" >
            <p>{{ datos.description }}</p>
            <a :href="datos.product_link" target="_blank" > Ir a comprar </a>
        </b-col>
      </b-row> 
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
      datos:Object
  },
  data() {
      return {
          openDet: false
      }
  },
  methods: {
      openDetails() {
          this.openDet =! this.openDet
      }
  }
};
</script>

<style lang="scss" scoped>
.spanColor{
  width: 25px;
  height: 25px;
  border-radius: 25px;
}
p {
  margin: 0;
}
</style>