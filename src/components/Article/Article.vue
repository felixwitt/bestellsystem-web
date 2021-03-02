<template>
  <v-card>
    <v-card-title>
        <v-btn @click="getArticles()" fab color="primary">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Suchen"
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search"></v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "AppBar",

  data() {
    return {
      drawer: false,

      search: null,

      headers: [
        {
          text: "Artikelnummer",
          align: "start",
          sortable: false,
          value: "artnr"
        },
        { text: "Artikelbezeichnung", value: "artbez" },
        { text: "Preis", value: "price" }
      ],
      items: [],

      newItem: []
    };
  },

  mounted() {
    this.getArticles();
  },

  methods: {
    getArticles() {
      this.items = []
      axios.get( process.env.BESTELLSYSTEMREST + "/api/article/").then((response) => {
        response.data.forEach((item) => {
          this.newItem = []
          this.newItem.artnr = item.artikelnummer
          this.newItem.artbez = item.artikelbezeichnung
          this.newItem.price = item.kosten
          this.newItem.storagevalue = item.bestand
          this.items.push(this.newItem)
        });
      })
      .catch((error) => {
        console.log(error)
      });
    }
  }
};
</script>

<style scoped>
.v-card {
    height: 200px;
}

.v-text-field {
    position: absolute;
    margin-left: 75%;
}

.v-btn {
    width: 40px;
    height: 40px;
    margin-left: 30px;
    margin-top: 0;
}
</style>
