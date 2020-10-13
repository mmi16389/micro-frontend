<template>
  <div>
    <div>HEl : {{ msg }}</div>
    <Header/>
  </div>
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
