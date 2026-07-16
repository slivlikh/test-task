import {useMutation, useQueryClient} from '@tanstack/react-query';
import {removeFromBasket} from '../basket.ts';
import {getBasketQueryOptions} from "../getBasketQueryOptions.ts";

export const useRemoveFromBasket = () => {
    const queryClient = useQueryClient();
    const basketQueryOptions = getBasketQueryOptions()


    return useMutation({
        mutationFn: removeFromBasket,

        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey: basketQueryOptions.queryKey })

            const previousBasket = queryClient.getQueryData(basketQueryOptions.queryKey)

            queryClient.setQueryData(basketQueryOptions.queryKey, (old) => {
                if (old) {
                    return old.filter(({ productId }) => productId !== variables)
                }
            })

            return { previousBasket }
        },

        onError: (_, __, context) => {
            if (context) {
                queryClient.setQueryData(basketQueryOptions.queryKey, context.previousBasket)
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: basketQueryOptions.queryKey })
        },
    });
};
