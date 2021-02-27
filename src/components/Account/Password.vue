<template>
  <div>
    <div class="navbarContainer">
      <NavBar></NavBar>
    </div>
      <v-text-field id="newPassword" label="Neues Passwort" v-model="newPassword"></v-text-field>
      <v-text-field id="confirmPassword" label="Passwort bestätigen" v-model="confirmPassword"></v-text-field>

    <v-btn @click="changePassword()">Passwort ändern</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
import NavBar from "@/components/Account/NavBar/NavBar";

export default {
  name: "Password",
  components: {
    NavBar
  },

  data() {
    return {


      dialog: false,

      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },

  methods: {
    changePassword() {
      if (this.newPassword === this.confirmPassword) {
        firebase.auth().currentUser.updatePassword(this.newPassword)
        this.dialog = false
      }
    }
  }
};
</script>
<style scoped>

.newPassword {
  position: absolute;
}

.confirmPassword {
  position: absolute;
}

.navbarContainer {
  position: absolute;
}
</style>
