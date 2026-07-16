import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addToBasket} from '../basket.ts';
import {getBasketQueryOptions} from "../getBasketQueryOptions.ts";

export const useAddToBasket = () => {
    const queryClient = useQueryClient();
    const queryOptions = getBasketQueryOptions()

    return useMutation({
        mutationFn: addToBasket,
        onSuccess: () => queryClient.invalidateQueries({queryKey: queryOptions.queryKey}),
    });
};
