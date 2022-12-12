<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/5bc78de8e1a40152c703a76a8655eb87.jpg">
    <HelloWorld msg="Pablo is sad"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
