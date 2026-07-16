import {useSuspenseQuery} from '@tanstack/react-query'
import {getProductsQueryOptions} from "../getProductsQueryOptions.ts";
import type {Product} from "../shema.ts"
import {useApiClient} from "../../useApiClient.ts";


export function useProductsPriceById() {
    const client = useApiClient();

    return useSuspenseQuery({
        ...getProductsQueryOptions(client),
        select: (data) => {
            return data.reduce((acc: Record<Product['id'], Product['price']>, product) => {
                acc[product.id] = product.price
                return acc
            }, {})
        }
    })
}