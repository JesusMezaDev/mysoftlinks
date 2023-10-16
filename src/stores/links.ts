import { ref } from 'vue';
import { defineStore } from 'pinia';

import confetti from 'canvas-confetti';

import { useLinks } from '@/composables/useLinks';

export const linksStore = defineStore('links', () => {
    const linkInput = ref<String>('');
    const shortUrl = ref<String>('');
    const loading = ref<Boolean>(false);
    const { createLink } = useLinks();

    const validateUrl = () => {
        const regex = RegExp('((http|https)?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*(\\?[;&a-z\\d%_.~+=-@]*)?(\\#[-a-z\\d_@]*)?$', 'i');
        return regex.test(linkInput.value.toString());
    }

    return {
        linkInput,
        loading,
        shortUrl,
        setShortUrl: async () => {
            loading.value = true;
            try {
                if (linkInput.value.toString().trim().length === 0) {
                    shortUrl.value = 'Por favor ingrese una Url.';
                    return;
                }

                if (!validateUrl()) {
                    shortUrl.value = 'La Url ingresada no es válida.';
                    return;
                }

                const short = Math.random().toString(36).substring(2, 10);
                const response = await createLink(linkInput.value.toString(), short);
                shortUrl.value = response;
    
                confetti();
            } catch (error) {
                shortUrl.value = 'No se pudo obtener la Url por el momento, inténtelo más tarde.';
            }
            finally {
                loading.value = false;
            }
        },
    }
});