// 1.引入axios
import axios from 'axios'
// 2.引入qs
import qs from 'qs'

import router from '../router/router'

import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
let baseURL = null;
// process中提供了开发环境或者生产环境
// 2.环境的切换
if (process.env.NODE_ENV === 'development') {
    // 开发环境
    baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
    // 生产环境
    baseURL = ''
}

// 3.自定义axios请求
const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000
})


// 4.拦截器
// 请求拦截器
instance.interceptors.request.use(config => {
    // console.group('本次请求的地址为:'+config.url)

    if (sessionStorage.getItem('user')) {
        if (config.url !== '/api/login' || config.url != '/api/register') {
            const user = JSON.parse(sessionStorage.getItem('user'))
            config.headers.authorization = user.token
        }
    }



    // 令牌的判断
    return config
}, err => {
    // 请求失败的结果
    return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(res => {
    // console.group('本次响应的地址为:'+res.config.url)
    if(res.data.code === 403){
        // 错误消息提示
        Toast.fail(res.msg)
        sessionStorage.removeItem('user')
        // 路由跳转
        router.push('/login')
    }

    return res
}, err => {
    return Promise.reject(err)
})

// 封装get请求
export function get(url, params = null) {
    /**
     * 1.得到Promise对象,
     * 2.在实例化中需要传递一个参数,该参数是一个function
     * 3.function中接受两个参数: resolve reject
     *  参数一:resolve  操作成功返回的结果
     * 参数二: reject   操作失败返回的结果
     */
    return new Promise((resolve, reject) => {
        // 发起真正的请求
        instance.get(url, {
            params
        }).then(res => {
            // 返回成功的结果
            resolve(res.data)
        }).catch(err => {
            // 返回失败的结果
            reject(err.data)
        })
    })
}

// 封装post请求
export function post(url, params, isFile = false) {
    // 设置请求头
    let config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    // 参数序列化
    let data = qs.stringify(params)
    // 有文件
    if (isFile) {
        config = {
            headers: {
                "Content-Type": "mutiple/form-data"
            }
        }
        data = new FormData()
        for (let i in params) {
            data.append(i, params[i])
        }
    }


    return new Promise((resolve, reject) => {
        // 发起post请求
        instance.post(url, data, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}