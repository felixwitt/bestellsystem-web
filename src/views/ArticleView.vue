<template>
  <v-app>
    <AppBar :pageName="pageName" :enableAccountIcon="true"></AppBar>
    <Article></Article>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar/AppBar.vue'
import Article from '@/components/Article/Article.vue'

export default {
  name: 'Home',
  components: {
    Article,
    AppBar
  },

  data() {
    return {
      pageName: 'Artikelübersicht'
    }
  }
};
</script>
