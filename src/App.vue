<template>
  <SpinnerView />
  <div class="content-middle">
    <div class="container">
      <header>
        <div class="mb-2 d-flex justify-content-center">
          <img src="/shortlink.svg" alt="Ícono de My Short Link" width="32" height="32" />
          <h3>MyShortLinks</h3>
        </div>
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  import SpinnerView from './shared/modules/spinner/views/SpinnerView.vue';
</script>

<style scoped>
  .content-middle {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 10px);
    padding: 10px;
  }
</style>