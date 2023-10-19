<template>
    <div class="row">
      <div class="col">
        testeando ando
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="bi-link"></i>
          </span>
          <input type="text" class="form-control" name="link" id="link" v-model="linkInput" @keyup.enter="setShortUrl" :disabled="loading === true" placeholder="Ejemplo: https://jesusmeza.dev">
        </div>
        <button class="btn btn-success float-end" @click="setShortUrl" :disabled="loading === true">
          <i class="bi-link-45deg"></i>
          Generar
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="m-3">
          <code>{{ shortUrl }}</code>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { linksStore } from '@/stores/links';
    const store = linksStore();
    const { linkInput, loading, shortUrl } = storeToRefs(store);
    const { setShortUrl } = store;
</script>

<style scoped>

</style>