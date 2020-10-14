<template>
 <v-app>
    <!-- Must have the app property -->
    <Header title="HOST APP ONE"/>
    <v-main>
      <v-container>
        Simple exemple of Webpack 5, Module Federation
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
// const Header = () => import("header/Header");
import Header from "header/Header";

export default {
  components: {
    Header,
  },
  data: () => {
    return {
      msg: "hello the world",
    };
  },
};
</script>
