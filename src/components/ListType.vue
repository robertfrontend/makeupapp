<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="12">
        <h4 class="m-0">{{ datos.title }}</h4>
      </b-col>

      <b-container >
        <div :class="mostrar ? 'p-4' : 'py-2'">
            <b-row v-if="mostrar" align-v="center" align-h="center">
              <b-col
                cols="6"
                class="mb-2 text-center"
                v-for="dato in datos.tagsList"
                :key="dato.value"
              >
                <router-link :to="dato.value">
                  <div class="tarjetaLista">
                    {{ dato.label }}
                  </div>
                </router-link>
              </b-col>
            </b-row>
    
            <div :class="mostrar ? 'text-right' : 'text-left'" class=" mt-2">
              <b-button
                class="px-3"
                :variant="mostrar ? 'dark' : 'outline-dark'"
                size="sm"
                @click="open"
              >
                <template v-if="mostrar != true"> Ver Lista </template>
                <template v-if="mostrar"> Mostrar menos </template>
              </b-button>
            </div>
        </div>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    datos: Object,
  },
  data() {
    return {
      mostrar: true
    };
  },
  methods: {
    open() {
      this.mostrar = !this.mostrar;
    },
  },
};
</script>

<style lang="scss">
.tarjetaLista {
  padding: 5px;
  border-radius: 8px;
  border: 2px solid rgba(243, 162, 130, 0.219);
  color: rgba(0, 5, 26, 0.637);
  font-weight: bold;
  font-size: 14px;
}
.linea {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.014);
  padding: 1em;
}
</style>
