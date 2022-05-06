<template>
<Notes />
  <AddNotes />
</template>

<script>

import Notes from "./components/Notes";
import AddNotes from "./components/AddNotes";
export default {
  name: 'App',
  components: {
    Notes,
    AddNotes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
