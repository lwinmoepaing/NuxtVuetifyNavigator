<template>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      required: true
    }
  }
}
</script>
