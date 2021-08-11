<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Counter />
    <NewCounter />
    <axios-demo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import NewCounter from "@/views/NewCounter.vue";
import axiosDemo from "@/views/axiosDemo/axiosDemo.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Counter,
    NewCounter,
    axiosDemo,
  },
};
</script>
