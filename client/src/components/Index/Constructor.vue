<template>
  <div class="constructor">
    <img
      v-if="selectedVersion"
      class="constructor__preview"
      width="320"
      height="320"
      :src="config.versions.find((el) => el.id === selectedVersion).image"
    />
    <form class="constructor__form form" @submit.prevent="handleSubmit" v-if="config">
      <h1 class="form__title">
        {{ config.versions.find((el) => el.id === selectedVersion).name || '' }} кофемашина на
        {{ selectedBeverages }} ячеек.
      </h1>
      <ul>
        <li v-for="(item, key) in config.versions" :key="key">
          <label class="form__label">
            <input type="radio" name="machine-type" :value="item.id" v-model="selectedVersion" />
            {{ item.name }}
          </label>
        </li>
      </ul>
      <ul>
        <li v-for="(item, key) in config.beverages" :key="key">
          <label class="form__label">
            <input
              type="radio"
              name="machine-beverages"
              :value="item"
              v-model="selectedBeverages"
            />
            {{ item }}
          </label>
        </li>
      </ul>
      <button class="form__submit">Сохранить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useMainStore, useCartStore } from '@/stores/index'
import { ref, type Ref } from 'vue'
const { addItemToCart } = useCartStore()
const { config } = useMainStore()

const selectedVersion: Ref<number> = ref(config.versions[0].id)
const selectedBeverages: Ref<number> = ref(config.beverages[0])

const handleSubmit = () => {
  addItemToCart({ type: selectedVersion.value, beverages: selectedBeverages.value })
}
</script>

<style scoped lang="scss">
.constructor {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 10px 5%;
  gap: 10px;

  &__preview {
    display: flex;
  }

  &__form {
    display: flex;
    flex-flow: column;
    flex-grow: 1;

    .form {
      &__title::first-letter {
        text-transform: uppercase;
      }

      &__label {
        &:hover {
          color: #555;
          cursor: pointer;
        }
      }

      &__submit {
        max-width: 200px;
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
  }
}
</style>
