<template>
  <v-app>
    <v-container>
      <v-text-field id="email" v-model="form.email" label="E-Mail"></v-text-field>
      <v-text-field id="password" type="password" v-model="form.password" label="Passwort"></v-text-field>
      <v-btn @click="login()" color="primary">Login</v-btn>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.$router.push('/article')
      }
    })
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.push("/order/new");
        })
    }
  }
};
</script>

<style>
.v-text-field {
  width: 40%;
  margin-left: 50%;
  transform: translate(-50%);
}

.v-btn {
  width: 15%;
  margin-left: 50%;
  margin-top: 10%;
  transform: translate(-50%);
}

.v-container {
  width: 30%;
}

.v-alert {
  width: 20%;
  text-align: center;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, 50%);
}
</style>
