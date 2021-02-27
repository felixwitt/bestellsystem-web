<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "app",

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.$router.push('/login');
      }
    });
  }
};
</script>
