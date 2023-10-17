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
    import { useRoute, useRouter } from 'vue-router';
    const { getLink } = useLinks();
    const route = useRoute();
    const router = useRouter();

    const redirect = async () => {
        try {
            const link = await getLink(route.params.shortUrl.toString());
            window.open(link, '_self');
        } catch (error) {
            router.push('pagenotfound');
        }
    }

    onBeforeMount(async () => {
        await redirect();
    });
</script>

<style scoped>

</style>