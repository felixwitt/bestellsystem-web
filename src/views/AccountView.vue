<template>
  <v-app>
    <AppBar :pageName="pageName" :enableAccountIcon="false"></AppBar>
    <Account></Account>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar/AppBar.vue'
import Account from '@/components/Account/Account.vue'

export default {
  components: {
    AppBar,
    Account
  },

  data() {
      return {
          pageName: 'Account'
      }
  }
};
</script>