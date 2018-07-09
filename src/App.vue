<template>
  <div id="app">
    <div class="container">
      <div class="row content-wrapper align-items-center justify-content-center">
        <div class="xs-12 md-6 md-4">
          <CardProduct/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from './components/CardProduct'

export default {
  name: 'app',
  components: {
    CardProduct
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-wrapper {
  height: 100vh;
}
</style>
