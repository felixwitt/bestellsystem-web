<template>
  <v-app>
    <AppBar :pageName="pageName" :enableAccountIcon="false"></AppBar>
    <Password></Password>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar/AppBar.vue'
import Password from "@/components/Account/Password";

export default {
  name: 'Home',
  components: {
    Password,
    AppBar
  },

  data() {
    return {
      pageName: 'Passwort ändern'
    }
  }
};
</script>
