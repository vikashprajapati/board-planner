import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "../default-board.js";
import { saveStatePlugin, uuid } from "../utilities/utils.js";

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;
export default new Vuex.Store({
  plugins: [saveStatePlugin],
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
    UPDATE_TASK(state, { key, task, value }) {
      task[key] = value;
    }
  },
  actions: {
    createTask({ commit }, { e, tasks }) {
      commit("CREATE_TASK", { e, tasks });
    },
    updateTask({ commit }, { key, task, value }) {
      commit("UPDATE_TASK", { key, task, value });
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
