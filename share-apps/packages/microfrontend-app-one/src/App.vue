<template>
  <div>
    <v-main>
      <div>HEl : {{ msg }}</div>
    </v-main>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      msg: "hello the world",
    };
  },
}
</script>
