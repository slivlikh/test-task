import {type} from 'arktype';
import type {ApiClient} from '../client';
import {type Product, ProductsShema} from "./shema.ts";


export const fetchProducts = async (client: ApiClient): Promise<Product[]> => {
    const {data} = await client.get('/products');
    const result = ProductsShema(data);

    console.log(result);
    if (result instanceof type.errors) throw new Error(result.summary);
    return result;
};
