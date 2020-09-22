<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
     
  </div>
</template>

<script>
// @ is an alias to /src
import { getbanner,getUserData } from "@/api/data.js";
export default {
  name: "Home",
  components: {
    
  },
  async mounted() {
    let result = await getbanner();
    let result2 = await getUserData();
    console.log(result);
    console.log(result2);
  },
};
</script>
