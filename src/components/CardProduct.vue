<template>
  <div class="product-wrapper">
    <div class="product-card" @click="onSelected"
         @mouseenter="isSelectedHover = true"
         @mouseleave="isSelectedHover = false"
         :class="{ selected: isSelected, selectedHover: isSelectedHover && isSelected,
         hover: isHoverLink,
         disabled: !product.quantity}">
      <div class="line-border" v-if="isNotSupportClipPath"></div>
      <div class="product_disabled" v-if="!product.quantity"></div>
      <div class="info-wrapper">
        <p class="promo-title" v-if="!isSelectedHover || !isSelected">Сказочное заморское яство</p>
        <p class="promo-title" v-else="isSelectedHover && isSelected">Котэ не одобряет?</p>
        <h2 class="title">Нямушка</h2>
        <h4 class="taste">{{ product.taste }}</h4>
        <p class="text"><b>{{ product.numberOfServings }}</b> {{ product.numberOfServings | formationWordEndings({nom:
          'порция', gen: 'порции', plu: 'порций'}) }}</p>
        <p class="text"><b>{{ product.countMouses }}</b> {{ product.countMouses | formationWordEndings({nom: 'мышь',
          gen: 'мыши', plu: 'мышей'}) }} в подарок</p>
        <p class="text" v-if="product.bestChoice">заказчик доволен</p>
      </div>
      <div class="weight-wrapper">
        <span class="weight">{{ product.weight | replaceDotByComma }}</span>
        <span class="unit-weighing">кг</span>
      </div>
    </div>
    <div class="product-footer">
      <p class="text text_empty" v-if="!product.quantity">Печалька, {{ product.taste }} закончился.</p>
      <p class="text" v-else-if="!isSelected">Чего сидишь? Порадуй котэ,
        <button class="text_link" @click="onSelected"
                @mouseenter="isHoverLink = true"
                @mouseleave="isHoverLink = false">купи.
        </button>
      </p>
      <p class="text" v-else="isSelected">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      isHoverLink: false,
      isSelected: false,
      isSelectedHover: false
    }
  },
  methods: {
    onSelected () {
      if (!this.product.quantity) {
        return false
      }
      this.isSelected = !this.isSelected
      this.isSelectedHover = false
    },
    isNotSupportClipPath () {
      let ua = navigator.userAgent,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || []
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || []
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}

/* line-border */
.line-border {
  position: absolute;
  z-index: 30;
  top: 17px;
  left: -12px;
  width: 60px;
  height: 5px;
  transform: rotate(-45deg);
  background: #1698D9;
}

.product-card:hover .line-border {
  background: #2EA8E6;
}

.product-card.selected .line-border {
  background: #D91667;
}

.product-card.selected.selectedHover .line-border {
  background: #E52E7A;
}

.product-card.disabled .line-border {
  background: rgb(217, 22, 103);
}

/* line-border */

.product-wrapper {
  margin-bottom: 35px;
}

/* product-card */
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 320px;
  max-width: 100%;
  height: 480px;
  border: 4px solid #1698D9;
  border-radius: 12px;
  background: url('../assets/images/cat.png') bottom -90px right -30px no-repeat,
  linear-gradient(to right, rgb(242, 242, 242), rgb(242, 242, 242));
  clip-path: polygon(43px 0, 100% 0, 100% 100%, 0 100%, 0 43px);
}

.product-card:hover, .product-card.hover {
  border-color: #2EA8E6;
}

.product-card.selected {
  border-color: #D91667;
}

.product-card.selected.selectedHover {
  border-color: #E52E7A;
}

.product-card.disabled {
  cursor: default;
  border-color: rgb(217, 22, 103);
}

.product_disabled {
  position: absolute;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, .7);
}

.info-wrapper {
  padding: 21px 51px;
  text-align: left;
}

.info-wrapper .text {
  font-size: 14px;
  color: #666666;
  margin-bottom: -5px;
}

.product-card.selected.selectedHover .promo-title {
  color: #E62E7A
}

.promo-title {
  color: #666;
}

.title, .taste {
  color: #000;
}

.title {
  font-size: 48px;
  font-weight: bold;
  margin-left: -2px;
  margin-bottom: 0;
}

.taste {
  font-size: 24px;
}

.weight-wrapper {
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  background-color: #1698D9;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  line-height: 18px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-top: auto;
}

.product-card:hover .weight-wrapper {
  background-color: #2EA8E6;
}

.product-card.selected .weight-wrapper {
  background-color: #D91667;
}

.product-card.selected.selectedHover .weight-wrapper {
  background-color: #E52E7A;
}

.product-card.disabled .weight-wrapper {
  background-color: #D91667;
}

.weight {
  font-size: 42px;
  line-height: 42px;
}

@media (max-width: 767px) {
  .product-card {
    margin: 0 auto;
  }
}

/* /product-card */

/* product-footer */
.product-footer {
  margin-top: 14px;
}

.product-footer .text {
  font-size: 13px;
  color: #fff;
  text-align: center;
}

.product-footer .text_empty {
  color: #FFFF66;
}

.text_link {
  background: transparent;
  color: #1698D9;
  border: none;
  border-bottom: 1px dashed #1698D9;
  padding: 0;
  cursor: pointer;
}

.product-card:hover ~ .product-footer .text_link {
  color: #22A7E9;
}

.text_link:hover {
  color: #22A7E9;
  text-decoration: none;
}

.text_link:focus {
  outline: none;
}

/* /product-footer */
</style>