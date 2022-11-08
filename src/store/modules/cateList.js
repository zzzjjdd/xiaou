import { getCates } from "../../request/api";

const state = {
    cateList :[],


}

const mutations = {
    changeCateList(state,arr) {
        state.cateList = arr
    },
}

const actions = {
    cateListAction(context) {
        getCates().then(res=>{
            context.commit('changeCateList',res.list)
        })
    }
}

const getters = {
    cateList(state) {
        return state.cateList
    },
    // childList(state) {
    //     return state.changeChild
    // }
}

export default {
    state,mutations,actions,getters
}