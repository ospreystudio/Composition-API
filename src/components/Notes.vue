<template>
<ul>
  <li v-for="(notes, index) in notes" :key="index">
    {{ notes }}
  </li>
</ul>

</template>

<script>

import { useStore } from 'vuex'
import { ref, computed } from 'vue';
export default {
  name: "Notes",
  setup() {

    const store = useStore();

    const notes = computed(() => store.state.notes)

    return {
      notes,

  }



  }
}
</script>

<style scoped>

</style>