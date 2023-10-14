<template>
    <div class="row">
      <div class="col">
        <div class="m-3">
          <label class="form-label" for="link">Link para acortar:</label>
          <input type="text" class="form-control mb-2" name="link" id="link" v-model="linkInput" @keyup.enter="setShortUrl">
          <button class="btn btn-success float-end" @click="setShortUrl">Generar</button>
        </div>
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
    const { linkInput, shortUrl } = storeToRefs(store);
    const { setShortUrl } = store;
</script>

<style scoped>

</style>