import vue from "vue"
import Vuex from "vuex";
import state from "./state";
import mutations from "./mumothed"
vue.use(Vuex);
const store = new Vuex.Store({
    state,
    mutations
})
export default store;
