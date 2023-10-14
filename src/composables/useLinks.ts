import { linksApi } from '@/api/links-api';

export const useLinks = () => {
    return {
        createLink: async (url: string, shortUrl: string) => {
            const response = await linksApi.post('/links', {
                url,
                shortUrl,
                visited: 0,
                createdAt: '2023-11-18',
            },);

            return response.data.shortUrl;
        },
        getLink: async (shortUrl: string) => {
            const response = await linksApi.get(`/links/${shortUrl}`);
            return response.data.url;
        }
    }
}