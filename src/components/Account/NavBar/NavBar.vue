<template>
  <v-navigation-drawer clipped class="drawer">
    <v-list>
      <v-list-item v-for="(item, i) in sideBarItems" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      sideBarItems: [
        {
          text: 'Profil',
          to: '/account/settings/profile',
          icon: 'mdi-account'
        },
        {
          text: 'Passwort ändern',
          to: '/account/settings/password',
          icon: 'mdi-shield-lock'
        }],
    }
  }
}
</script>

<style scoped>
.drawer {
  width: 15%;
  height: 80%;
}
</style>
