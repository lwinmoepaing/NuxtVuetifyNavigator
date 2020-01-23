<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="$emit('drawerToggle')" />

    <v-btn icon @click.stop="$emit('miniVariantToggle')">
      <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
    </v-btn>

    <v-btn icon @click.stop="$emit('clippedToggle')">
      <v-icon>mdi-application</v-icon>
    </v-btn>

    <v-btn icon @click.stop="$emit('fixedToggle')" >
      <v-icon>mdi-minus</v-icon>
    </v-btn>

    <v-toolbar-title v-text="title" />

    <v-spacer />

    <v-btn icon @click.stop="$emit('rightDrawerToggle')" >
      <v-icon>mdi-menu</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  props: {
    miniVariant: Boolean,
    title: String,
    clipped: Boolean,
  }
}
</script>
