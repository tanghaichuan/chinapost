<template>
<div class="container-main">

</div>
</template>
<script>
import routes from '../../routes'
import bus from '../../bus'
export default {
  data() {
    return {
      routes,
    }
  },
  methods: {

  },
  created() {
    console.log(this.routes);
  },
  components: {}
}
</script>
<style>
body {
  background: #FFF;
}
</style>
