<template>
  <div id="app">
    <Navbar />
    <Main />
    <Projects />
  </div>
</template>

<script>
import Main from './components/Main'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Main,
    Projects,
    Navbar
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
  @import '/assets/index.css';
  body{
    overflow-x: hidden;
  }
</style>
