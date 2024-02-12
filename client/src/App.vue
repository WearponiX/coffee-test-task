<template>
  <RouterView v-if="!isLoading" />
  <Preloader v-else />
</template>

<script setup lang="ts">
import axios from 'axios'
import { useMainStore } from '@/stores/index'

import { onMounted, ref, type Ref } from 'vue'
import { RouterView } from 'vue-router'

import Preloader from './components/Preloader.vue'

const { setConfig } = useMainStore()
const isLoading: Ref<boolean> = ref(false)

onMounted(() => {
  console.log('Mounted')
  isLoading.value = true
  axios.get('http://localhost:3005/getOptions').then((res) => {
    console.log('Response received', res.data)
    setConfig(res.data)
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  })
})
</script>
