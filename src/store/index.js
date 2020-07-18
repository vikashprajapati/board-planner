import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "../default-board.js";
import { saveStatePlugin } from "../utilities/utils.js";

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;
export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  mutations: {},
  actions: {},
  modules: {}
});
