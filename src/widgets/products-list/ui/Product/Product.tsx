import {useProduct, useProductInBasket, type Product as ProductType} from '@/shared/api';
import {AddToBasket} from '@/features/add-to-basket';
import {RemoveFromBasket} from '@/features/remove-from-basket';
import * as S from './style';

export const Product = ({id}: {id: ProductType['id']}) => {
    const {data: product} = useProduct(id);
    const basketItem = useProductInBasket(id);

    return (
        <S.Row>
            <S.Image src={product.image} alt={product.title}/>
            <S.Title>{product.title}</S.Title>
            <S.Info>
                <S.Price>${product.price}</S.Price>
                <S.Rating>{product.rating.rate} ({product.rating.count})</S.Rating>
            </S.Info>
            <S.Actions>
                <AddToBasket productId={id}/>
                {basketItem && <RemoveFromBasket productId={id}/>}
            </S.Actions>
        </S.Row>
    );
};
