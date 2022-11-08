export const state = {
    user:sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) :null
}

export const mutations = {
    cnangeUser(state,user ) {
        if(user) {
            state.user = user
            sessionStorage.setItem('user',JSON.stringify(user))
        } else {
            sessionStorage.removeItem('user')
        }
        
    }
}

export const getters = {
    user(state) {
        return state.user
    }
}