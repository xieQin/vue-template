import Hello from './components/Hello/index.vue'

/* eslint-disable */
export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: Hello
    },
    '/room': {
      name: 'room',
      component: function(resolve){
        require(['./components/Room/index.vue'], resolve)
      }
    }
  })

  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}
