import {useSuspenseQuery} from '@tanstack/react-query';
import {getProductsQueryOptions} from '../getProductsQueryOptions.ts';
import {useApiClient} from '../../useApiClient.ts';

export const useProductsCategories = () => {
    const client = useApiClient();
    return useSuspenseQuery({
        ...getProductsQueryOptions(client),
        select: (data) => [...new Set(data.map((p) => p.category))],
    });
};
