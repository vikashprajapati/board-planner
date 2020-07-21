<template>
  <div @drop.self="onDrop" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrop",
  methods: {
    onDrop(event) {
      const transferData = JSON.parse(event.dataTransfer.getData("payload"));
      console.log(transferData);
      this.$emit("drop", transferData);
    }
  }
};
</script>

<style lang="scss" scoped></style>
