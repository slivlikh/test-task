import {useSearchParams} from 'react-router';
import {useProductIds} from '@/shared/api';
import {Product} from './Product/Product';
import {Filters} from './Filters/Filters';
import {useProductListData} from "./useProductListData.ts";

export const ProductsList = () => {
    useProductListData()

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category') ?? undefined;
    const {data: ids} = useProductIds(category);

    return (
        <div>
            <Filters/>
            {ids.map((id) => (
                <Product key={id} id={id}/>
            ))}
        </div>
    );
};
