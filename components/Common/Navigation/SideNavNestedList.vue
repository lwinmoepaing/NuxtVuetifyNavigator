<template>
  <v-list-group
    :prepend-icon="link.icon"
    :color="color"
    value="true"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{link.title}}</v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item
      v-for="(sublink, index) in link.subLinks"
      :to="pathTo(sublink.to)"
      :key="index"
      router
      exact
    >
      <v-list-item-action>
        <v-icon></v-icon>
      </v-list-item-action>
      <v-list-item-title> {{sublink.title}} </v-list-item-title>
      <v-list-item-action>
        <v-icon> {{sublink.icon}} </v-icon>
      </v-list-item-action>
    </v-list-item>

  </v-list-group>
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
      required: true,
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>
