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
// console.log(bus);
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
