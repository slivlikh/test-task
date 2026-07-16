import {useProduct, useUpdateBasketQuantity, type Product} from '@/shared/api';
import {Counter} from '@/shared/ui';
import {RemoveFromBasket} from '@/features/remove-from-basket';
import * as S from './style';
import Decimal from "decimal.js";

export const BasketProduct = ({productId, quantity}: {productId: Product['id']; quantity: number}) => {
    const {data: product} = useProduct(productId);
    const {mutateAsync, isPending} = useUpdateBasketQuantity();

    const quantityDecimal = new Decimal(quantity);
    const priceDecimal = new Decimal(product.price);
    const totalPriceDecimal = quantityDecimal.mul(priceDecimal);


    return (
        <S.Row>
            <S.Image src={product.image} alt={product.title}/>
            <S.Title>{product.title}</S.Title>
            <Counter value={quantity} disabled={isPending} onChange={(newQuantity) => mutateAsync({productId, quantity: newQuantity})}/>
            <S.Total>${totalPriceDecimal.toString()}</S.Total>
            <RemoveFromBasket productId={productId}/>
        </S.Row>
    );
};
