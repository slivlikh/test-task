import {useSuspenseQuery} from '@tanstack/react-query';
import {getProductsQueryOptions} from '../getProductsQueryOptions.ts';
import {useApiClient} from '../../useApiClient.ts';

export const useProductIds = (category?: string) => {
    const client = useApiClient();
    return useSuspenseQuery({
        ...getProductsQueryOptions(client),
        select: (data) => {
            const filtered = category
                ? data.filter((p) => p.category === category)
                : data;
            return filtered.map((p) => p.id);
        },
    });
};
