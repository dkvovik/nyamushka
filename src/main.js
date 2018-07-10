import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.filter('formationWordEndings', function (num, cases) {
    num = Math.abs(num);
    let word = '';
    if (num.toString().indexOf('.') > -1) {
      word = cases.gen;
    } else {
      word = (
        num % 10 === 1 && num % 100 !== 11
          ? cases.nom
          : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
          ? cases.gen
          : cases.plu
      );
    }
    return word;
})

Vue.filter('replaceDotByComma', function (value) {
  return value.toString().replace(/\./, ',');
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
