import {useBasket} from '@/shared/api';

export const BasketIndicator = () => {
    const {data: basket} = useBasket();
    const totalQuantity = basket.reduce((sum, item) => sum + item.quantity, 0);

    return <span>Basket ({totalQuantity})</span>;
};
