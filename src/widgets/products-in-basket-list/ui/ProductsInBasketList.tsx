import {useBasket} from '@/shared/api';
import {BasketProduct} from './BasketProduct/BasketProduct';
import {EmptyBasket} from './EmptyBasket';
import {Total} from './Total';
import {useProductsInBasketListData} from "./useProductsInBasketListData.ts";

export const ProductsInBasketList = () => {
    useProductsInBasketListData()

    const {data: basket} = useBasket();

    if (basket.length === 0) {
        return <EmptyBasket/>;
    }

    return (
        <div>
            {basket.map((item) => (
                <BasketProduct
                    key={item.productId}
                    productId={item.productId}
                    quantity={item.quantity}
                />
            ))}
            <Total basket={basket}/>
        </div>
    );
};
