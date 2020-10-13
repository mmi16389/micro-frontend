<template>
  <v-app>
    <!-- Must have the app property -->
    <Header />
    <v-main>
      <v-container>
        Hello World
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>
<script>
const Header = () => import("header/Header");
const Footer = () => import("header/Footer");
export default {
  components: {
    Footer,
    Header
  }
};
</script>
