<template>
  <li class="list__item item">
    <span>[{{ item?.id }}]</span> |
    <span>{{ config.versions.find((el) => el.id === item.type).name }} кофемашина </span> |
    <span>Слоты: {{ item?.beverages }}</span> |
    <span>Количество: {{ item?.amount }}</span>
    <button class="item__button" @click.prevent="handlePlusClick">+</button>
    <button class="item__button" @click.prevent="handleMinusClick">-</button>
  </li>
</template>

<script setup lang="ts">
import { useMainStore, useCartStore } from '@/stores/index'
const { config } = useMainStore()
const { changeItemAmount } = useCartStore()
const { item } = defineProps({
  item: { type: Object, required: true }
})

const handlePlusClick = () => {
  changeItemAmount(item.id, 1)
}
const handleMinusClick = () => {
  changeItemAmount(item.id, -1)
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  gap: 10px;

  span {
    display: flex;
    justify-content: center;
    width: 20%;

    &:first-child {
      text-align: left;
      width: max-content;
    }
  }

  &__button {
    display: block;
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    padding: 5px;
    appearance: none;
    background: none;
    border: 1px solid #555;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: #eee;
    }
  }
}
</style>
