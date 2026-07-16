import {type} from "arktype";
import {ProductShema} from '../products/shema.ts'

export const BasketItemShema = type({
    productId: ProductShema.get('id'),
    quantity: 'number',
    addedDate: 'string',
});

export const BasketShema = BasketItemShema.array();


export type BasketItem = typeof BasketItemShema.infer;
export type Basket = typeof BasketShema.infer;