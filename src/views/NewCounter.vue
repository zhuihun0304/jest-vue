<template>
  <div>
    <span>count: {{ count }}</span>

    <button @click="increment">自增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    increment() {
      this.count++;
      // this.$emit("change", this.count);
    },
  },
};
</script>
