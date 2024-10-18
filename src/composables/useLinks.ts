import { linksApi } from '@/api/links-api';

export const useLinks = () => {
    return {
        createLink: async (url: string) => {
            const response = await linksApi.post('/links', { url });

            return response.data.shortUrl;
        },
        getLink: async (shortUrl: string) => {
            const response = await linksApi.get(`/links/${shortUrl}`);
            return response.data.url;
        }
    }
}