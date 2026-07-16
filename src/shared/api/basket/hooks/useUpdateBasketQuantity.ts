import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updateBasketQuantity} from '../basket.ts';
import {getBasketQueryOptions} from "../getBasketQueryOptions.ts";

export const useUpdateBasketQuantity = () => {
    const queryClient = useQueryClient();

    const basketQueryOptions = getBasketQueryOptions()

    return useMutation({
        mutationFn: updateBasketQuantity,

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: basketQueryOptions.queryKey })
        },
    });
};
