import {withSuspense} from '@/shared/lib';
import {Loading} from '@/shared/ui';
import {Error} from '@/shared/ui';
import {ProductsList} from '@/widgets/products-list';

const SuspendedProductsList = withSuspense(Loading)(Error)(ProductsList);

export const ProductsPage = () => {
    return (
        <>
            <h1>Products</h1>
            <SuspendedProductsList/>
        </>
    );
};
