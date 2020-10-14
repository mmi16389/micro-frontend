<template>
  <div>
    <v-app-bar color="#009688" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>MICROFRONTEND - {{title}}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      group: null,
      drawer: false
    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
  },
};
</script>
