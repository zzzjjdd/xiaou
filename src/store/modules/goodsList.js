import { getgoodlist } from "../../request/api";

const state = {
    goodsList: [],
    size: 10,
    page: 1
}
const mutations = {
    changeGoodsList(state, arr) {
        state.goodsList = arr
    }

}
const actions = {
    goodsListActions(context, data) {
        let params = {
            cateid: data[0],//分类id
            page: context.state.page,
            size: context.state.size,
            type: data[1] //判断几级分类
        }
        getgoodlist(params).then(res => {
            if (res.code == 200) {
                context.commit('changeGoodsList', res.list.goodData)
            }
        })
    }
}
const getters = {
    goodsList(state) {
        return state.goodsList
    }

}

export default {
    state, mutations, actions, getters,
}