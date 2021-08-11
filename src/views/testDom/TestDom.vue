<template>
  <div class="outer">
    <p v-for="message in message" :key="message">{{ message }}</p>
    <!-- <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not Authorized</span> -->

    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  // props: ["messages"],
  props: {
    message: {
      type: Array,
      required: true,
    },
    // msg: {
    //   type: String,
    //   required: true,
    // },
  },
  data() {
    return {};
  },
};
</script>
