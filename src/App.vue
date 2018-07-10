<template>
  <div id="app">
    <div class="container">
      <div class="row content-wrapper align-items-center justify-content-center">
        <div class="col-12">
          <h1 class="main-title">Ты сегодня покормил кота?</h1>
          <div class="row justify-content-around">
            <div class="col-md-6 col-lg-4" v-for="product in products" :key="product.id">
              <CardProduct :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from './components/CardProduct'

export default {
  name: 'app',
  data () {
    return {
      products: [
        {
          id: 1,
          numberOfServings: 10,
          taste: 'с фуа-гра',
          countMouses: 1,
          weight: 0.5,
          description: 'Печень утки разварная с артишоками.',
          quantity: 5,
          bestChoice: false
        },
        {
          id: 2,
          numberOfServings: 40,
          taste: 'с рыбой',
          countMouses: 2,
          weight: 2,
          description: 'Головы щучьи с чесноком да свежайшая сёмгушка',
          quantity: 2,
          bestChoice: false
        },
        {
          id: 3,
          numberOfServings: 100,
          taste: 'с курой',
          countMouses: 5,
          weight: 5,
          description: 'Филе из цыплят с трюфелями в бульоне.',
          quantity: 0,
          bestChoice: true
        }
      ]
    }
  },
  components: {
    CardProduct
  }
}
</script>

<style>
@font-face {
  font-family: 'Exo2';
  src: url('./assets/fonts/Exo20-Thin.woff2') format('woff2'),
  url('./assets/fonts/Exo20-Thin.woff') format('woff'),
  url('./assets/fonts/Exo20-Thin.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'TrebuchetMS';
  src: url('./assets/fonts/TrebuchetMS-Bold.woff2') format('woff2'),
  url('./assets/fonts/TrebuchetMS-Bold.woff') format('woff'),
  url('./assets/fonts/TrebuchetMS-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'TrebuchetMS';
  src: url('./assets/fonts/TrebuchetMS.woff2') format('woff2'),
  url('./assets/fonts/TrebuchetMS.woff') format('woff'),
  url('./assets/fonts/TrebuchetMS.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: 'TrebuchetMS', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(-180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%),
              url("assets/images/background.png");
}
.content-wrapper {
  min-height: 100vh;
}
.main-title {
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: 'Exo2', Helvetica, Arial, sans-serif;
  font-size: 36px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  text-shadow: 0 1px 1px #000000;
}
</style>
