import {queryOptions} from '@tanstack/react-query';
import {fetchProducts} from './product.ts';
import type {ApiClient} from '../client.ts';

export const getProductsQueryOptions = (client: ApiClient) =>
    queryOptions({
        queryKey: ['products'],
        queryFn: () => fetchProducts(client),
        staleTime: 'static',
        retryOnMount: false,
    });
