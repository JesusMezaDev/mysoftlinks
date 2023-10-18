<template>
    <div class="row">
        <div class="col text-center">
            Redirigiendo...
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onBeforeMount } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useLinks } from '@/composables/useLinks';
    import { useRoute, useRouter } from 'vue-router';
    import { linksStore } from '@/stores/links';
    
    const { loading } = storeToRefs(linksStore());
    const { getLink } = useLinks();
    const route = useRoute();
    const router = useRouter();

    const redirect = async () => {
        loading.value = true;
        try {
            const link = await getLink(route.params.shortUrl.toString());
            window.open(link, '_self');
        } catch (error) {
            router.push('pagenotfound');
        }
        finally {
            loading.value = false;
        }
    }

    onBeforeMount(async () => {
        await redirect();
    });
</script>

<style scoped>

</style>