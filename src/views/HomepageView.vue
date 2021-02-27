<template>
  <v-app>
    <AppBar :pageName="pageName" :enableAccountIcon="true"></AppBar>
    <!-- <HomePage /> -->
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar.vue";

export default {
  components: {
    AppBar,
  },

  data() {
    return {
      pageName: 'Homepage'
    }
  }
};
</script>