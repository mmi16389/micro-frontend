<template>
  <div>
    REMOTES APPS
     <Header/>
  </div>
</template>
<script>
// import { ref, defineAsyncComponent } from "vue";
const Header = () => import("header/Header");

export default {
  components: {
    Header
  }
};
</script>
