<template>
  <v-app dark>
    <LeftDrawer
      :drawer="drawer"
      :items="items"
      :miniVariant="miniVariant"
      :clipped="clipped"
      :fixed="fixed"
      @drawerToggle="setDrawer($event)"
    />

    <AppBar
      :miniVariant="miniVariant"
      :clipped="clipped"
      :title="title"
      @drawerToggle="drawer = !drawer"
      @miniVariantToggle="miniVariant = !miniVariant"
      @clippedToggle="clipped = !clipped"
      @fixedToggle="fixed = !fixed"
      @rightDrawerToggle="rightDrawer = !rightDrawer"
    />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <RightNavigationDrawer
      :fixed="fixed"
      :rightDrawer="rightDrawer"
      @drawerToggle="setRightDrawer($event)"
    />

    <Footer :fixed="fixed" />
  </v-app>
</template>

<script>
// Import Components
import AppBar from '~/components/Common/Navigation/AppBar'
import LeftDrawer from '~/components/Common/Navigation/LeftDrawer'
import RightNavigationDrawer from '~/components/Common/Navigation/RightNavigationDrawer'
import Footer from '~/components/Common/Footer'

// Import Drawer Route List
import { masterLayoutRoute } from '~/configs/DrawerRouteList'

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: masterLayoutRoute,
      miniVariant: false,
      rightDrawer: false,
      title: 'Master'
    }
  },
  methods: {
    setDrawer (event) { this.drawer = event },
    setRightDrawer (event) { this.rightDrawer = event}
  },
  components: { AppBar, Footer, LeftDrawer, RightNavigationDrawer }
}
</script>
