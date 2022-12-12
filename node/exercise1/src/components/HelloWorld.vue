<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to not be sad like Pablo ,<br>
      check out this link:
      <a href="https://mywaifulist.moe/popular" target="_blank" rel="noopener">YOU NEED THIS</a>.
    </p>

  </div> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #d74cb2;
}
</style>
