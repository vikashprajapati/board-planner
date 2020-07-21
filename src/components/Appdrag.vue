<template>
  <div draggable @dragstart.self="onDrag" @dragover.prevent @dragenter.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDrag",
  props: {
    transferData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDrag(event) {
      console.log("dragggggg");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";

      event.dataTransfer.setData("payload", JSON.stringify(this.transferData));
    }
  }
};
</script>

<style lang="scss" scoped></style>
