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
  background: linear-gradient(-180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),
              url("./assets/background.png"),;
}
.content-wrapper {
  height: 100vh;
}
</style>
