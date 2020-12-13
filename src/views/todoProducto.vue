<template>
  <b-container>
    <b-row class="mt-4">
      <b-col cols="12" v-for="dato in lista" :key="dato.value">
        <ListType :datos="dato"  />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ListType from "@/components/ListType.vue";
export default {
  name: "todoProducto",
  components: { ListType },
  data() {
    return {
      lista: [
        {
          title: "Tags list",
          value: "Tags list",
          id: 1,
          tagsList: [
            { value: "Canadian", label: "Canadian" },
            { value: "CertClean", label: "CertClean" },
            { value: "Chemical Free", label: "Chemical Free" },
            { value: "Dairy Free", label: "Dairy Free" },
          ],
        },
        {
          title: "Brands list",
          value: "Brands list",
          id: 2,
          tagsList: [
            { value: "almay", label: "almay" },
            { value: "alva", label: "alva" },
            { value: "Chemical Free", label: "Chemical Free" },
            { value: "Dairy Free", label: "Dairy Free" },
          ],
        },
      ],
      openList: false,
    };
  },
  methods: {
    abrir(dato) {
      if (dato.id === dato.id) {
        console.log("open open", dato);
        this.openList = !this.openList;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
