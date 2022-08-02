<template>
  <div id="app">
    <nav>
      <router-link to="/test1">Test 1</router-link>
      <router-link to="/test2">Test 2</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body{
  background:#e1f5fe;
  padding: 0;
  margin: 0;
  min-height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;
  position: sticky;
  top: 0;
  background:#e1f5fe;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 2em;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
