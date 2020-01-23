<template>
  <v-list>
    <div v-for="(link, i) in links" :key="i">
      <SideNavNormalList
        v-if="!link.subLinks"
        :link="link"
        :color="styles.color"
      />
      <SideNavNestedList
        v-else
        :link="link"
        :color="styles.color"
      />
    </div>
  </v-list>
</template>

<script>
import SideNavNormalList from '~/components/Common/Navigation/SideNavNormalList'
import SideNavNestedList from '~/components/Common/Navigation/SideNavNestedList'

export default {
  data() {
    return {
     styles: { color: 'indigo' }
    }
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  components: {
    SideNavNormalList,
    SideNavNestedList
  }
}
</script>
