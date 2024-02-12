<template>
  <ul class="cart__list list">
    <CartItem
      class="list__item item"
      v-for="(item, key) in cart"
      :key="`${key}-${JSON.stringify(item)}`"
      :item="item"
    />
  </ul>
</template>

<script setup lang="ts">
import CartItem from './Item.vue'
import { useCartStore } from '@/stores/index'
const { cart } = useCartStore()
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 10px 5%;
  gap: 10px;
}
</style>
