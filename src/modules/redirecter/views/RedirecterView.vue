<template>
    <div class="row">
        <div class="col">
            Redirigiendo...
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onBeforeMount } from 'vue';
    import { useLinks } from '@/composables/useLinks';
    import { useRoute } from 'vue-router';
    const { getLink } = useLinks();
    const route = useRoute();

    onBeforeMount(async () => {
        const link = await getLink(route.params.shortUrl.toString());
        window.open(link, '_self');
    });
</script>

<style scoped>

</style>