<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getbanner } from "@/api/data.js";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  async mounted() {
    let result = await getbanner();
    // console.log(result);
  },
};
</script>
