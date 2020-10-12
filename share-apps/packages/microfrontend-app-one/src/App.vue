<template>
  <div>
    <v-main> 
    </v-main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Header from 'app_2/Header' 

@Component({
  components: {
    Header
  },
})
export default class App extends Vue {}
</script>
