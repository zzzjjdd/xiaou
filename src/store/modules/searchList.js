import { getsearch } from "../../request/api";

const state = {
    searchList : [],
    keywords:''
}

const mutations = {
    changeSearchList (state,arr) {
        state.searchList = arr
    }
}

const actions = {

    searchListActions(context,data) {
        getsearch({keywords:data}).then (res => {
            context.commit ('changeSearchList',res.list)
        })
    }
}

const getters = {
    searchList(state) {
        return state.searchList
    }
}
export default {
    state,mutations,actions,getters,
}