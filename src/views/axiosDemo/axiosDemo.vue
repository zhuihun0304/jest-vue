<template>
  <button @click="fetchResults">{{ value }}</button>
</template>

<script>
// import axios from "axios";
import { fetchData } from "@/views/TestGet.js";

export default {
  data() {
    return {
      value: null,
    };
  },

  methods: {
    async fetchResults() {
      console.log(111);
      // /mock/service属于真实接口
      const response = await fetchData();
      // this.value = response.data;
      console.log("3333", this.value, response);
    },
  },
};
</script>
