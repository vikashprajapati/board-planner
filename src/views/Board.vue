<template>
  <div class="board bg-gray-800 h-full py-4">
    <h1 class="text-2xl font-bold tracking-wide text-white text-center">Welcome! to Trello</h1>
    <div class="flex flex-row items-start p-4">
      <div
        class="column"
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        @drop="moveTask($event, column.tasks)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="text-center mb-2 font-bold text-lg capitalize">
          <h3>{{ column.name }}</h3>
        </div>
        <div class="list-reset">
          <div
            class="tasks"
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            draggable
            @dragstart="pickUpTask($event, $columnIndex, $taskIndex)"
            @click="openThisTask(task)"
          >
            <span class="flex-no-shrink font-semibold w-full">
              {{
              task.name
              }}
            </span>
            <p
              v-if="task.description"
              class="mt-1 flex-no-shrink w-full text-sm"
            >{{ task.description }}</p>
          </div>
          <input
            type="text"
            class="block w-full bg-transparent p-2"
            placeholder="+ Enter task name"
            @keyup.enter="createNewTask($event, column.tasks)"
          />
        </div>
      </div>
    </div>

    <div class="task-bg" v-if="isTaskOpen" @click.self="closeThisTask">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Board",
  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      return this.$route.name === "task";
    }
  },
  methods: {
    openThisTask(task) {
      this.$router.push({ name: "task", params: { id: task.id } });
    },
    closeThisTask() {
      this.$router.go(-1);
    },
    createNewTask(e, tasks) {
      this.$store.dispatch("createTask", { e, tasks });
      e.target.value = "";
    },
    pickUpTask(event, fromColumnIndex, taskIndex) {
      console.log("vevever");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.dropEffect = "move";

      event.dataTransfer.setData("task-index", taskIndex);
      event.dataTransfer.setData("column-index", fromColumnIndex);
    },
    moveTask(event, toTasks) {
      const fromColumnIndex = event.dataTransfer.getData("column-index");
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      const taskIndex = event.dataTransfer.getData("task-index");
      this.$store.dispatch("moveTask", {
        fromTasks,
        toTasks,
        taskIndex
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.column {
  @apply rounded shadow text-left bg-gray-500 p-2 mr-4;
  min-width: 350px;
  max-width: 400px;
  // max-height: 500px;
}
.tasks {
  @apply bg-white rounded shadow text-left p-1 text-black mb-2;
}
.task-bg {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.list-reset input::placeholder {
  color: #000;
}
.list-reset input:focus {
  outline: none;
}
</style>
