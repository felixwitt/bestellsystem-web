<template>
  <v-app>
    <AppBar :pageName="pageName" :enableAccountIcon="true"></AppBar>
    <Homepage></Homepage>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar.vue";
import Homepage from "@/components/Homepage/Homepage.vue";

export default {
  components: {
    AppBar,
    Homepage
  },

  data() {
    return {
      pageName: 'Homepage'
    }
  }
};
</script>