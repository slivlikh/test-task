import {queryOptions} from '@tanstack/react-query';
import {getBasket} from './basket.ts';

export const getBasketQueryOptions = () =>
    queryOptions({
        queryKey: ['basket'],
        queryFn: () => getBasket(),
        staleTime: 0,
        retryOnMount: false,
    });
