import {withSuspense} from '@/shared/lib';
import {Loading, Error} from '@/shared/ui';
import {ProductsInBasketList} from '@/widgets/products-in-basket-list';

const SuspendedProductsInBasketList = withSuspense(Loading)(Error)(ProductsInBasketList);

export const BasketPage = () => {
    return (
        <>
            <h1>Basket</h1>
            <SuspendedProductsInBasketList/>
        </>
    );
};
