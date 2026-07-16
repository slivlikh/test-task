import {useContext} from 'react';
import type {ApiClient} from './client';
import {ApiContext} from './ApiContext.ts';

export const useApiClient = (): ApiClient => {
    const client = useContext(ApiContext);
    if (!client) throw new Error('useApiClient must be used within ApiProvider');
    return client;
};
