import { getCate } from "../../request/api";

const state = {
    topSort:[],
}
const mutations = {
    changeTopSort  (state,arr) {
        state.topSort = arr
    }

}
const actions = {
    topSortAction(context) {
        getCate().then(res => {
            context.commit('changeTopSort',res.list)
        })
    }
}
const getters = {
    topSort(state) {
        return state.topSort
    }

}

export default {
    state,mutations,actions,getters,
}