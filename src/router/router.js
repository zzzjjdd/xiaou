import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 一级路由
const Top = () => import('../components/components/Top') //头部电量显示
const Index = () => import('../page/index/Index') //大首页
const Login = () => import('../page/login/Login') //登录
const Register = () => import('../page/register/Register') //注册
const GoodList = () => import('../page/goodList/GoodList') //商品列表
const GoodDetails = () => import('../page/goodDetails/GoodDetails.vue') //商品详情
const SearchList = () => import('../page/searchList/SearchList') //商品搜索
const Reorder = () => import('../page/reorder/Reorder') //商品搜索
const Address = () => import('../page/address/Address') //地址管理
const Xinaddress = () => import('../page/address/Xinaddress') //新增地址
const EditAddress = () => import('../page/address/EditAddress.vue') //修改地址
const Pay = () => import('../page/pay/Pay') //新增地址
import a from '../request/a.vue'; //测试接口


// 二级路由
import Home from '../view/Home';
import Cate from '../view/Cate';
import Cart from '../view/Cart';
import Person from '../view/Person';
const router = new Router({
    // mode:'history',
    routes: [{
            path: '',
            redirect: '/login'
        },
        {
            path: '/index',
            components: {
                default: Index,
                top: Top
            },
            children: [{
                    path: 'home',
                    component: Home,
                    meta: {
                        title: '首页'
                    }
                },
                {
                    path: '',
                    redirect: 'home'
                },
                {
                    path: 'cate',
                    component: Cate,
                    meta: {
                        title: '商品分类'
                    }
                }, {
                    path: 'cart/:id',
                    component: Cart,
                    name:"cart",
                    meta: {
                        title: '购物车'
                    }
                }, {
                    path: 'person',
                    component: Person,
                    meta: {
                        title: '个人中心'
                    }
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            meta: {
                title: '登录'
            }
        }, {
            path: '/register',
            component: Register,
            meta: {
                title: '注册'
            }
        }, {
            path: '/goodList',
            component: GoodList,
            name: 'goodList',
            meta: {
                title: '商品列表'
            }
        }, {
            path: '/search',
            // name:'search',
            component: SearchList,
            name: '商品搜索'
        }, {
            path: '/a',
            component: a,
            name: '测试'
        }, {
            path: '/details',
            component: GoodDetails,
            name: '商品详情'
        }, {
            path: '/reorder',
            component: Reorder,
            name: '确认订单'
        }, {
            path: '/address',
            component: Address,
            name: '地址管理'
        }, {
            path: '/xinadd',
            component: Xinaddress,
            name: '新增地址'
        },  {
            path: '/editadd',
            component: EditAddress,
            name: '修改地址'
        }, {
            path: '/pay',
            component: Pay,
            name: '支付'
        }


    ],
    scrollBehavior(to, form, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }

})



export default router