<template>
<div>
  <cheader></cheader>
  <main>
    <router-view></router-view>
  </main>
</div>
</template>
<script>
import cheader from './module/index/header.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    cheader
  }
}
</script>
