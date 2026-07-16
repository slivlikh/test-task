import {useSuspenseQuery} from '@tanstack/react-query';
import {getProductsQueryOptions} from '../getProductsQueryOptions.ts';
import {useApiClient} from '../../useApiClient.ts';

export const useProducts = () => {
    const client = useApiClient();
    return useSuspenseQuery(getProductsQueryOptions(client));
};
