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
export default {
  name: "ColumnTask",
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    board: {
      type: Object,
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
    },
    moveTask(event, toTasks, toTaskIndex) {
      const fromColumnIndex = event.dataTransfer.getData("column-index");
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      const fromTaskIndex = event.dataTransfer.getData("task-index");

      this.$store.dispatch("moveTask", {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      });
    },
    moveColumn(event, toColumnIndex) {
      const fromColumnIndex = event.dataTransfer.getData("column-index");
      this.$store.dispatch("moveColumn", {
        fromColumn: fromColumnIndex,
        toColumn: toColumnIndex
      });
    },
    moveTaskOrColumn(event, toTasks, toColumnIndex, taskIndex) {
      const type = event.dataTransfer.getData("type");
      if (type === "task") {
        this.moveTask(
          event,
          toTasks,
          taskIndex !== undefined ? taskIndex : toTasks.length
        );
      } else {
        this.moveColumn(event, toColumnIndex);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tasks {
  @apply bg-white rounded shadow text-left p-1 text-black mb-2;
}
</style>
