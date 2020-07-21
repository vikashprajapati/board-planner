<template>
  <div
    class="tasks"
    draggable
    @dragstart="pickUpTask($event, columnIndex, taskIndex, 'task')"
    @click="openThisTask(task)"
    @dragover.prevent
    @dragenter.prevent
    @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
  >
    <span class="flex-no-shrink font-semibold w-full">{{ task.name }}</span>
    <p v-if="task.description" class="mt-1 flex-no-shrink w-full text-sm">{{ task.description }}</p>
  </div>
</template>

<script>
import moveTasksAndColumnMixin from "../mixins/moveTasksAndColumnMixin.js";
export default {
  name: "ColumnTask",
  mixins: [moveTasksAndColumnMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    openThisTask(task) {
      this.$router.push({ name: "task", params: { id: task.id } });
    },
    pickUpTask(event, fromColumnIndex, taskIndex, type) {
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";

      event.dataTransfer.setData("task-index", taskIndex);
      event.dataTransfer.setData("column-index", fromColumnIndex);
      event.dataTransfer.setData("type", type);
    }
  }
};
</script>

<style lang="scss" scoped>
.tasks {
  @apply bg-white rounded shadow text-left p-1 text-black mb-2;
}
</style>
