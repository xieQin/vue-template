import Hello from './components/Hello/index.vue'
import Temp from './components/Template/index.vue'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: Hello
    },
    '/data': {
      name: 'temp',
      component: Temp
    }
  })

  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}
