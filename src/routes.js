import Hello from './components/Hello/index.vue'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: Hello
    }
  })

  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}
