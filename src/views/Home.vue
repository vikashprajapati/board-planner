<template>
  <div class="home">
    <h1>Welcome to Trello</h1>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Board.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
