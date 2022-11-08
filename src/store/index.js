import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goodsList from "./modules/goodsList"; //商品列表
import topSort from "./modules/topSort"; //头部分类
import cateList from "./modules/cateList";  //全部分类
import searchList from "./modules/searchList";  //商品搜索
import cartList from "./modules/cartList";  //购物车列表
import queryCart from "./modules/queryCart"; 
import daojishi from "./modules/daojishi"; 

// import cartList from "./modules/cartList";  

import { state,mutations,getters } from "./mutations";
import actions from './actions'

// 创建store仓库
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        goodsList,
        topSort,
        cateList,
        searchList,
        cartList,
        queryCart,
        daojishi
    }

})

export default store