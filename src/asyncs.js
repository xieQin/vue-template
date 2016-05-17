export default function (Vue) {
  Vue.component('Lottery', function (resolve, reject) {
    require(['./components/Lottery/index.vue'], resolve)
  })

  Vue.component('Room', function (resolve, reject) {
    require(['./components/Room/index.vue'], resolve)
  })
}
