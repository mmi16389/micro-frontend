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
<script lang="ts">
// import { ref, defineAsyncComponent } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";
const Footer = () => import("header/Footer");
import  Header from './components/Layouts/Header.vue';

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>
