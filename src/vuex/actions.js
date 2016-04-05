import * as types from './types'
import api from '../api'

export const getDemo = ({ dispatch }) => {
  api.getDemos().then(response => {
    if (!response.ok) {
      return dispatch(types.DEMO_STATE_FALIURE)
    }
    dispatch(types.DEMO_STATE_SUCCESS, response.data)
  }, response => {
    dispatch(types.DEMO_STATE_FALIURE)
  })
}

