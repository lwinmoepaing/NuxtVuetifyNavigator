<template>
  <v-list-item
    :to="pathTo(link.to)"
    :color="color"
    router
    exact
  >
    <v-list-item-action>
      <v-icon>{{ link.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="link.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  methods: {
    // If don't hv Locale Path Method For Language Switcher
    pathTo(link) {
      return this.localePath ? this.localePath(link) : link;
    }
  },
  props: {
    link: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

