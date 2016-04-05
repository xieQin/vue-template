import { GetDemoApi } from './resources'

export default {
  getDemos: function (data) {
    return GetDemoApi.get()
  }
}
