import { ref, computed, type Ref, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'

interface Item extends RawItem {
  id: string,
  beverages: number,
  type: number,
  amount: number
}

interface RawItem {
  beverages: number,
  type: number
}

type Config = {
  beverages: number[],
  versions: object[]
}

export const useCartStore = defineStore('cart', () => {
  const cart: Ref<Item[]> = ref([])
  const addItemToCart = (newItem: RawItem) => {
    cart.value.push({ ...newItem, id: Date.now().toString(), amount: 1 })
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
  const removeItemFromCart = (itemId: string) => {
    cart.value.splice(cart.value.map(el => el.id).indexOf(itemId), 1)
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
  const changeItemAmount = (itemId: string, amount: number) => {
    const item: Item | undefined = cart.value.find(el => el.id === itemId)
    if (!item || item.amount + amount < 0) return;
    const index = cart.value.map(el => el.id).indexOf(item.id)
    if (item.amount + amount === 0) { removeItemFromCart(item.id) } else { cart.value[index].amount += amount };
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
  const setCart = (newCart: Item[]) => {
    cart.value = newCart;
  }

  onBeforeMount(() => {
    const LSData = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(LSData)
  })

  return { cart, addItemToCart, removeItemFromCart, changeItemAmount, setCart }
})

export const useMainStore = defineStore('main', () => {
  const config: Ref<Config> = ref({
    beverages: [0],
    versions: [
      { "id": 0, "name": "", "image": "" },
    ]
  })

  const setConfig = (newConfig: Config) => {
    config.value = newConfig
  }

  return { config, setConfig }
})
