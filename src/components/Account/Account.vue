<template>
  <div>
    <div class="navbarContainer">
      <NavBar></NavBar>
    </div>
    <v-data-table class="dataTable" :headers="headers" :items="customerDetails" hide-default-footer></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";
import NavBar from "@/components/Account/NavBar/NavBar";

export default {
  name: "AppBar",
  components: {
    NavBar
  },

  data() {
    return {
      headers: [
        {
          text: "Kundennummer",
          align: "start",
          sortable: false,
          value: "customerNumber"
        },
        {text: "Vorname", value: "vname", sortable: false},
        {text: "Nachname", value: "nname", sortable: false},
        {text: "E-Mail", value: "email", sortable: false},
        {text: "PLZ", value: "postalcode", sortable: false},
        {text: "Stadt", value: "city", sortable: false},
        {text: "Straße", value: "street", sortable: false},
        {text: "Hausnummer", value: "housenumber", sortable: false}
      ],

      customerDetails: [],

      newCustomer: [],

      sideBarItems: [
        {
          text: 'Profil',
          to: '/account/settings/profile',
          icon: 'mdi-account'
        },
        {
          text: 'Passwort ändern',
          to: '/account/settings/password',
          icon: 'mdi-shield-lock'
        }]
    };
  },

  mounted() {
    this.getCusomerInfo();
  },

  methods: {
    getCusomerInfo() {
      axios
          .get("http://localhost:8081/api/customer/", {
            params: {
              email: firebase.auth().currentUser.email
            }
          })
          .then((response) => {
            this.newCustomer = []
            this.newCustomer.customerNumber = response.data.kundennummer;
            this.newCustomer.vname = response.data.vorname;
            this.newCustomer.nname = response.data.nachname;
            this.newCustomer.email = response.data.email;
            this.newCustomer.postalcode = response.data.plz;
            this.newCustomer.city = response.data.stadt;
            this.newCustomer.street = response.data.straße;
            this.newCustomer.housenumber = response.data.hausnummer;
            this.customerDetails.push(this.newCustomer);
          });
    }
  }
};
</script>
<style scoped>
.navbarContainer {
  position: absolute;
}

.dataTable {
  width: 80%;
  right: 0;
  top: 10%;
  position: absolute;
  transform: translate(-10%);
}
</style>
