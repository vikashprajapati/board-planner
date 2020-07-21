<template>
  <div class="board bg-gray-800 h-full py-4 mt-16">
    <div class="flex flex-col items-start px-4 py-1">
      <input
        class="text-xl p-1 px-2 rounded font-bold tracking-wide bg-gray-500 text-white capitalize"
        :value="boardName"
      />
    </div>
    <div class="flex flex-row items-start p-4">
      <div v-for="(column, $columnIndex) of board.columns" :key="$columnIndex">
        <BoardColumn :column="column" :board="board" :columnIndex="$columnIndex" />
      </div>
      <div class="column flex flex-col">
        <input
          name="new-column"
          class="bg-white rounded p-2"
          type="text"
          v-model="newColumnName"
          placeholder="+ Enter new column name"
          @keyup.enter="createNewColumn()"
        />
      </div>
    </div>

    <div class="task-bg" v-if="isTaskOpen" @click.self="closeThisTask">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BoardColumn from "@/components/BoardColumn.vue";
export default {
  name: "Board",
  components: {
    BoardColumn
  },
  data() {
    return {
      newColumnName: ""
    };
  },
  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      return this.$route.name === "task";
    },
    boardName() {
      return this.board.name;
    }
  },
  methods: {
    closeThisTask() {
      this.$router.go(-1);
    },
    createNewColumn() {
      this.$store.dispatch("createColumn", { name: this.newColumnName });
      this.newColumnName = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.board {
  min-width: 100vw;
}

.task-bg {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
