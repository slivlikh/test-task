import {useQueryClient, useSuspenseQueries} from '@tanstack/react-query';
import {getProductsQueryOptions, getBasketQueryOptions, useApiClient } from '@/shared/api';

export const useProductListData = () => {
    const client = useApiClient();

    const queryClient = useQueryClient()

    const basketOptions = getBasketQueryOptions()

    useSuspenseQueries({
        queries: [
            getProductsQueryOptions(client),
            {
                ...basketOptions,
                initialData: () => queryClient.getQueryData(basketOptions.queryKey),
            }
        ],
    });
};
