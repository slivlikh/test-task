import {useSuspenseQuery} from '@tanstack/react-query';
import type {Product} from '../shema.ts';
import {getProductsQueryOptions} from '../getProductsQueryOptions.ts';
import {useApiClient} from '../../useApiClient.ts';

export const useProduct = (id: Product['id']) => {
    const client = useApiClient();
    return useSuspenseQuery({
        ...getProductsQueryOptions(client),
        select: (data) => data.find((p) => p.id === id)!,
    });
};
