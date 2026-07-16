import {useSuspenseQuery} from '@tanstack/react-query';
import type {Product} from '../../products/shema.ts';
import type {BasketItem} from '../shema.ts';
import {getBasketQueryOptions} from '../getBasketQueryOptions.ts';

export const useProductInBasket = (productId: Product['id']): BasketItem | null => {
    const {data} = useSuspenseQuery({
        ...getBasketQueryOptions(),
        select: (basket) => basket.find((item) => item.productId === productId) ?? null,
    });
    return data;
};
