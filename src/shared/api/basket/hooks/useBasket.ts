import {useQueryClient, useSuspenseQuery} from '@tanstack/react-query';
import {getBasketQueryOptions} from '../getBasketQueryOptions.ts';

export const useBasket = () => {
    const queryClient = useQueryClient();
    const queryOptions = getBasketQueryOptions()

    return useSuspenseQuery({
        ...queryOptions,
        staleTime: 0,
        initialData: () => queryClient.getQueryData(queryOptions.queryKey)
    });
};
