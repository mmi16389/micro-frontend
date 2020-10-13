<template>
 <v-app>
    <!-- Must have the app property -->
    <Header />
    <v-main>
      <v-container>
        Hello World
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
const Header = () => import("header/Header");
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
