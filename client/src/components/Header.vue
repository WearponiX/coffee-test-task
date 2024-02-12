<template>
  <header class="header">
    <router-link class="header__logo" to="/">
      <img src="@/assets/img/logo.png" alt="Logo" width="60" height="60" />
    </router-link>
    <nav class="header__nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/cart/">Корзина</router-link>
    </nav>
    <div class="header__cart">
      <span v-if="cart.length === 0">В корзине пусто</span>
      <span v-else>Товаров в корзине: {{ cart.length }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/index'
const { cart } = useCartStore()
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 80px;
  background: #eee;
  padding: 10px 5%;
  box-sizing: border-box;

  .router-link-active {
    text-decoration: underline;
    color: #555;
    pointer-events: none;
    font-weight: 600;
  }

  &__logo,
  &__nav,
  &__cart {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  &__nav {
    a {
      padding: 5px;
    }
  }
}
</style>
