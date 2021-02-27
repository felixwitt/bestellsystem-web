<template>
  <div>
    <div class="navbarContainer">
      <NavBar></NavBar>
    </div>
    <div class="passwordContainer">
      <v-text-field
        id="oldPassword"
        label="Aktuelles Passwort"
        type="password"
        v-model="oldPassword"
      ></v-text-field>
      <v-text-field id="newPassword" label="Neues Passwort" type="password" v-model="newPassword"></v-text-field>
      <v-text-field
        id="confirmPassword"
        label="Passwort bestätigen"
        type="password"
        v-model="confirmPassword"
      ></v-text-field>
    </div>

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

      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },

  methods: {
    reauthenticate() {
      var user = firebase.auth().currentUser;
      var cred = firebase.auth.EmailAuthProvider.credential(
        user.email,
        this.oldPassword
      );
      return user.reauthenticateWithCredential(cred);
    },

    changePassword() {
      this.reauthenticate().then(() => {
        var user = firebase.auth().currentUser;
        user.updatePassword(this.newPassword).then(() => {
          firebase.auth().signOut();
          this.$router.push("/login");
        });
      });
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
