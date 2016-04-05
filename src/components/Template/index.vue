<template>
  <div class="template">
    data: {{ data | json}}
  </div>
</template>

<script>
import { getDemosData } from '../../vuex/getters.js'
import { getDemo } from '../../vuex/actions.js'

export default {
  vuex: {
    actions: {
      getDemo
    },
    getters: {
      data: getDemosData
    }
  },
  route: {
    activate () {
      this.getDemo()
    }
  }
}
</script>