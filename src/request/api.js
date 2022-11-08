import {
    get,
    post
} from './http'
// 自己自定义的api接口的封装

// 获取总的分类
export const getCates = () => get('/api/getcates')
export const getCate = () => get('/api/getcate')
export const getbanner = () => get('/api/getbanner')
export const gethortgoods = () => get('/api/gethortgoods')

export const getgoodlist = (params) => get('/api/getgoodlist', params)
export const getsearch = (params) => get('/api/search', params)
export const getgoodsinfo = (params) => get('/api/getgoodsinfo', params)
export const cartlist = (params) => get('/api/cartlist', params)
export const cartadd = (data) => post('/api/cartadd', data)
export const cartedit = (data) => post('/api/cartedit', data)
export const cartdelete = (data) => post('/api/cartdelete', data)
export const orderadd = (data) => post('/api/orderadd', data)
export const addresslist = (data) => get('/api/addresslist', data)
export const addressadd = (data) => post('/api/addressadd', data)

export const addressedit = (data) => post('/api/addressedit', data)
export const addressremove = (data) => post('/api/addressremove', data)
export const getseckill = () => get('/api/getseckill', )



// 登录
export const postLogin = (data) => post('/api/login', data)
export const postRegister = (data) => post('/api/register', data)