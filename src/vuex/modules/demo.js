import {
  DEMO_STATE_SUCCESS,
  DEMO_STATE_FALIURE
} from '../types'

const state = {
  demos: []
}

const mutations = {
  [DEMO_STATE_FALIURE] (state, action) {
    state.demos = []
  },
  [DEMO_STATE_SUCCESS] (state, action) {
    state.demos = action
  }
}

export default {
  state,
  mutations
}
