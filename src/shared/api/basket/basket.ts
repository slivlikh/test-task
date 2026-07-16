import type {Product} from '../products/shema.ts';
import {BasketService} from './BasketService';
import {BasketLocalStorageAdapter} from "./BasketLocalStorageAdapter.ts";


function sleep(millis: number) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

const basketService = new BasketService(new BasketLocalStorageAdapter());

export const getBasket = async () => {
    return basketService.getBasket()
}

export const addToBasket = async (productId: Product['id']) => {
    await sleep(1000)
    return basketService.addItem(productId);
}

export const removeFromBasket = async (productId: Product['id']) => {
    await sleep(1000)
    return basketService.removeItem(productId);
}

export const updateBasketQuantity = async ({productId, quantity}: {productId: Product['id']; quantity: number}) => {
    await sleep(1000)
    return basketService.updateQuantity(productId, quantity);
}
