<template>
  <div class="wrapper">
    <label for="input">问题：</label>
    <input id="input" type="text" v-model="inputValue" />
    <button @click="getAnswer">click</button>
    <p>答案：{{ answer }}</p>
    <img :src="src" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Test3",
  data() {
    return {
      inputValue: "ok?",
      answer: "",
      src: "",
    };
  },
  methods: {
    getAnswer() {
      const URL = "https://yesno.wtf/api";
      return axios
        .get(URL)
        .then((result) => {
          if (result && result.data) {
            this.answer = result.data.answer;
            this.src = result.data.image;
            return result;
          }
        })
        .catch((e) => {});
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 500px;
  margin: 0 auto;
  text-align: left;
}
</style>
