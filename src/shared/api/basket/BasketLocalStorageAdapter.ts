import {type} from "arktype";
import {type Basket, BasketShema} from "./shema.ts";
import type {BasketDBDriverInterface} from "./BasketDBDriverInterface.ts";

export class BasketLocalStorageAdapter implements BasketDBDriverInterface {
    async get(): Promise<Basket> {
        const basket = localStorage.getItem("basket")
        if (!basket) {
            return [];
        }

        const result = BasketShema(JSON.parse(basket));

        if (result instanceof type.errors) {
            throw result;
        }

        return result;
    }

    async set(value: Basket): Promise<{ status: 'ok' }> {
        const result = BasketShema(value)

        if (result instanceof type.errors) {
            throw result;
        }

        localStorage.setItem("basket", JSON.stringify(value));

        return {status: 'ok'};
    }
}