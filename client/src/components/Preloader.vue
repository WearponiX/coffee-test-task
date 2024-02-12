<template>
  <div class="preloader">
    <span class="preloader__wheel" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.preloader {
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .preloader__wheel {
    position: absolute;
    content: '';
    display: flex;
    width: 4px;
    height: 40px;
    border-radius: 2px;
    background: #555;
    animation: rotate 1000ms infinite 0ms;
    &::before {
      position: absolute;
      content: '';
      display: flex;
      width: 4px;
      height: 40px;
      border-radius: 2px;
      background: #5555;
      transform: rotate(120deg);
    }
    &::after {
      position: absolute;
      content: '';
      display: flex;
      width: 4px;
      height: 40px;
      border-radius: 2px;
      background: #5555;
      transform: rotate(240deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(120deg);
    }
    67% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
