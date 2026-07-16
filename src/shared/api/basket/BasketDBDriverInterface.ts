import type {Basket} from "./shema.ts";

export interface BasketDBDriverInterface {
    get(): Promise<Basket>;

    set(value: Basket): Promise<{ status: 'ok' }>;
}