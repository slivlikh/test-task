import {produce} from "immer";
import {type Basket as BasketType, type BasketItem} from './shema.ts';
import type {BasketDBDriverInterface} from "./BasketDBDriverInterface.ts";


const MIN_QUANTITY = 1


export class BasketService {
    #basket: BasketDBDriverInterface;

    constructor(basketDBDriver: BasketDBDriverInterface) {
        this.#basket = basketDBDriver
    }

    #findIndexBasketItemById(basket: BasketType, productId: number): number {
        return basket.findIndex((basketItem) => basketItem.productId === productId);
    }

    static #buildBasketItem(productId: BasketItem['productId'], quantity: number): BasketItem {
        return {productId, quantity: quantity, addedDate: new Date().toISOString()};
    }


    async getBasket() {
        return await this.#basket.get();
    }


    async addItem(productId: BasketItem['productId']) {
        const basket = await this.#basket.get()
        const itemInBasketIndex = this.#findIndexBasketItemById(basket, productId);

        if (itemInBasketIndex === -1) {
            await this.#basket.set([...basket, BasketService.#buildBasketItem(productId, 1)]);
            return await this.#basket.get();
        }

        const updatedBasket = produce(basket, draftBasket => {
            draftBasket[itemInBasketIndex].quantity += 1;
        });

        await this.#basket.set(updatedBasket);

        return await this.#basket.get();
    }

    async updateQuantity(productId: BasketItem['productId'], quantity: number) {
        if (!Number.isInteger(quantity)) {
            throw new Error('new quantity has to be an integer')
        }

        if (quantity < MIN_QUANTITY) {
            throw new Error('new quantity cannot be less than 1')
        }


        const basket = await this.#basket.get();
        const itemInBasketIndex = this.#findIndexBasketItemById(basket, productId);

        if (itemInBasketIndex === -1) {
            await this.#basket.set([...basket, BasketService.#buildBasketItem(productId, quantity)]);
            return await this.#basket.get();
        }

        const updatedBasket = produce(basket, draftBasket => {
            draftBasket[itemInBasketIndex].quantity = quantity;
        });

        await this.#basket.set(updatedBasket);


        return await this.#basket.get();
    }

    async removeItem(productId: BasketItem['productId']) {
        const basket = await this.#basket.get();

        await this.#basket.set(basket.filter((basketItem) => basketItem.productId !== productId));
        return await this.#basket.get();
    }
}