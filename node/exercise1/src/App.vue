<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>

  <footer>
       <h1 class="footer">The Feeter</h1>

    </footer>

  
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #d74cb2
}

body{
  background-color: #D9AFD9;
  background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
}

.footer{
        background-color:rgb(155, 155, 184) ;
        height: 69px;
    }



</style>
