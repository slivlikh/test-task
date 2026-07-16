import {type BasketItem} from '@/shared/api';
import Decimal from "decimal.js";
import {useProductsPriceById} from "@/shared/api/products/hooks/useProductsPriceById.ts";

export const Total = ({basket}: {basket: BasketItem[]}) => {
    const {data: productsMap} = useProductsPriceById();

    const total = basket.reduce((acc, {productId, quantity}) => {
        return acc.plus(new Decimal(quantity).mul(new Decimal(productsMap[productId])));
    }, new Decimal(0))

    return <div>Total price: ${total.toString()}</div>
};
