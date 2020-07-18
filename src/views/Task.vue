<template>
  <div class="task-view">
    <div class="flex flex-col justify-center px-2">{{ task.name }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTask']),
    task () {
      return this.getTask(this.$route.params.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.task-view {
  @apply relative flex flex-row bg-white mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
