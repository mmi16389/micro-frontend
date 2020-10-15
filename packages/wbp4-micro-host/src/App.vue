<template>
  <v-app>
    <!-- Must have the app property -->
    <Header title="HOST APP TREE" />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
const Header = () =>
  window.header.get('./Header').then(factory => {
    const Module = factory()
    return Module
  })

const Footer = () =>
  window.header.get('./Footer').then(factory => {
    const Module = factory()
    return Module
  })
export default {
  components: {
    Header,
    Footer
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
