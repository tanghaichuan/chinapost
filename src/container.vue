<template>
<div>
  <cheader></cheader>
  <main>
    <router-view></router-view>
  </main>
</div>
</template>
<script>
import cheader from 'components/header.vue'
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
