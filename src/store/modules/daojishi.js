import {
    getseckill
} from "../../request/api"

const state = {
    countdown : ''
}

const mutations = {
    setCountdown(state, newCountdown) {
        state.countdown = newCountdown
    }
}

const actions = {
    countdownAction(context) {
        getseckill().then(res => {
            let countdown = res.list[0].endtime - Date.now();
            // console.log(countdown);
            context.commit('setCountdown', countdown)
        })
    }
}

const getters = {
    countdown(state) {
        return  state.countdown
    }
}

export default {
    state,mutations,actions,getters,
}