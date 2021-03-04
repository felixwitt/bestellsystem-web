<template>
  <v-card>
    <v-card-title class="dataTableHeader">
      <v-btn @click="addToShoppingCard()">Zu Warenkorb hinzufügen</v-btn>
      <v-spacer></v-spacer>
      <v-text-field id="articleNumber" label="Artikelnummer" v-model="articleNumber"></v-text-field>
    </v-card-title>
    <v-data-table id="articleTable" :headers="headers" :items="items" hide-default-footer></v-data-table>
    <v-data-table id="shoppingCard" :headers="headers" :items="shoppingCard" hide-default-footer>
      <template v-slot:top>
        <h3 id="dataTableTitle">Warenkorb</h3>
        <v-spacer></v-spacer>
        <div id="price">Gesamtpreis: {{ price }}€</div>
      </template>
    </v-data-table>

    <v-btn id="btnOrder" color="primary" @click="order()">Bestellen</v-btn>
  </v-card>
</template>

<script>
import axios from "axios";
import firebase from "firebase";

export default {
  name: "AppBar",

  data() {
    return {
      articleNumber: "",

      headers: [
        {
          text: "Artikelnummer",
          align: "start",
          sortable: false,
          value: "artikelnummer"
        },
        {text: "Artikelbezeichnung", value: "artikelbezeichnung", sortable: false},
        {text: "Preis", value: "kosten", sortable: false}
      ],

      items: [],

      shoppingCard: [],

      price: 0
    };
  },

  methods: {
    getArticle() {
      this.items = [];
      axios
          .get(process.env.BESTELLSYSTEMREST + "/api/article/" + this.articleNumber)
          .then(response => {
            this.items = [];
            this.items.push(response.data);
          });
    },

    addToShoppingCard() {
      if (this.items[0].artikelnummer !== undefined) {
        this.items[0].email = firebase.auth().currentUser.email;
        this.shoppingCard.push(this.items[0]);
        this.price += this.items[0].kosten;
      }
      console.log(this.shoppingCard);
    },

    order() {
      axios
          .post(process.env.BESTELLSYSTEMREST + "/api/order/new/", this.shoppingCard)
          .then(() => {
            this.items = []
            this.shoppingCard = []
            this.price = 0
          })
          .catch(error => {
            console.log(error);
          });
    }
  },

  watch: {
    articleNumber() {
      this.getArticle();
    }
  }
};
</script>

<style scoped>
.v-card {
  height: 100%;
}

.v-text-field {
  position: absolute;
  margin-left: 75%;
}

.v-btn {
  margin-left: 7%;
  margin-top: 0;
  width: 250px;
}

#shoppingCard {
  position: absolute;
  margin-top: 5%;
  width: 100%;
}

#dataTableTitle {
  margin-left: 1%;
}

#price {
  position: absolute;
  right: 2%;
  top: 3%;
  font-weight: bold;
}

#btnOrder {
  position: absolute;
  bottom: 5%;
  right: -5%;
}
</style>
