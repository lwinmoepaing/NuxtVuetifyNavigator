<template>
  <v-navigation-drawer
    v-model="propDrawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <SideNavItems :links="items" />
  </v-navigation-drawer>
</template>

<script>
import SideNavItems from '~/components/Common/Navigation/SideNavItems'

export default {
  props: {
    items: Array,
    miniVariant: Boolean,
    clipped: Boolean,
    fixed: Boolean,
    drawer: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    propDrawer: {
      get() { return this.drawer },
      set(propDrawer) {
        this.$emit('drawerToggle', propDrawer);
      }
    }
  },
  components: {
    SideNavItems
  }
}
</script>
