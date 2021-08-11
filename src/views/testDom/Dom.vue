<template>
  <div>
    <test-dom :message="messages" />
  </div>
</template>

<script>
import testDom from "@/views/testDom/TestDom";

export default {
  name: "Dom",
  data() {
    return {
      messages: ["Hello Jest", "Hello Vue"],
    };
  },
  components: {
    testDom,
  },
};
</script>
