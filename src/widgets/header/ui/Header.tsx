import {Link} from 'react-router';
import {withSuspense} from '@/shared/lib';
import {Loading, Error} from '@/shared/ui';
import {BasketIndicator} from './BasketIndicator';
import * as S from './style';

const SuspendedBasketIndicator = withSuspense(Loading)(Error)(BasketIndicator);

export const Header = () => {
    return (
        <S.HeaderContainer>
            <nav>
                <Link to="/products">Products</Link>
                <Link to="/basket">Basket</Link>
            </nav>
            <SuspendedBasketIndicator/>
        </S.HeaderContainer>
    );
};
