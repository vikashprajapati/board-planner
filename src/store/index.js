import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "../default-board.js";
import { uuid } from "../utilities/utils.js";

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;
export default new Vuex.Store({
  plugins: [],
  state: {
    board
  },
  mutations: {
    CREATE_TASK(state, { e, tasks }) {
      tasks.push({
        name: e.target.value,
        description: "",
        id: uuid(),
        userAssigned: null
      });
    },
    CREATE_COLUMN(state, name) {
      state.board.columns.push({
        name,
        tasks: []
      });
    },
    UPDATE_TASK(state, { key, task, value }) {
      task[key] = value;
    },
    MOVE_TASK(state, { fromTasks, fromTaskIndex, toTasks, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    MOVE_COLUMN(state, { fromColumn, toColumn }) {
      const columnList = this.state.board.columns;
      const columnToMove = columnList.splice(fromColumn, 1)[0];
      columnList.splice(toColumn, 0, columnToMove);
    }
  },
  actions: {
    createTask({ commit }, { e, tasks }) {
      commit("CREATE_TASK", { e, tasks });
    },
    createColumn({ commit }, { name }) {
      commit("CREATE_COLUMN", name);
    },
    updateTask({ commit }, { key, task, value }) {
      commit("UPDATE_TASK", { key, task, value });
    },
    moveTask({ commit }, { fromTasks, fromTaskIndex, toTasks, toTaskIndex }) {
      commit("MOVE_TASK", { fromTasks, fromTaskIndex, toTasks, toTaskIndex });
    },
    moveColumn({ commit }, { fromColumn, toColumn }) {
      commit("MOVE_COLUMN", { fromColumn, toColumn });
    }
  },
  modules: {},
  getters: {
    getTask(state) {
      return id => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      };
    }
  }
});
