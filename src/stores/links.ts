import { ref } from 'vue';
import { defineStore } from 'pinia';

import { useLinks } from '@/composables/useLinks';

export const linksStore = defineStore('links', () => {
    const linkInput = ref<String>('');
    const shortUrl = ref<String>('');
    const { createLink } = useLinks();

    return {
        linkInput,
        shortUrl,
        setShortUrl: async () => {
            const short = Math.random().toString(36).substring(2, 10);
            const response = await createLink(linkInput.value.toString(), short);
            shortUrl.value = response;
        },
    }
});