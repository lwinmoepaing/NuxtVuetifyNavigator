<template>
    <v-navigation-drawer
      v-model="propDrawer"
      temporary
      right
      :fixed="fixed"
      app
      >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    fixed: {
      required: true,
      type: Boolean
    },
    rightDrawer: {
      required: true,
      type: Boolean
    }
  },
  computed: {
    propDrawer: {
      get() { return this.rightDrawer },
      set(propDrawer) {
        this.$emit('drawerToggle', propDrawer);
      }
    }
  }
}
</script>
