import axios, {type AxiosInstance} from 'axios';

export type ApiClient = AxiosInstance;

interface ApiClientConfig {
    baseURL: string;
}

export const createApiClient = (config: ApiClientConfig): ApiClient => {
    return axios.create({
        baseURL: config.baseURL,
    });
};
