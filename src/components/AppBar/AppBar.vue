<template>
  <div>
    <v-app-bar class="primary" dark>
      <v-icon @click.stop="drawer = !drawer">mdi-reorder-horizontal</v-icon>
      <h3 id="pageName">{{ pageName }}</h3>
      <v-spacer v-if="enableAccountIcon"></v-spacer>
      <v-icon v-if="enableAccountIcon" @click="toAccountView()">mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppBar",

  props: ['pageName', 'enableAccountIcon'],

  data() {
    return {
      drawer: false,

      items: [
        {
          icon: "mdi-shopping-outline",
          title: "Artikel",
          to: "/article"
        },
        {
          icon: "mdi-cart-arrow-down",
          title: "Bestellen",
          to: "/order/new"
        }
      ]
    };
  },

  methods: {
    toAccountView() {
      this.$router.push('/account/settings/profile')
    }
  }
};
</script>

<style scoped>
#pageName {
  margin-left: 20px;
}
</style>
