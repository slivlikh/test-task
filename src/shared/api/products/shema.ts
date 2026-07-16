import {type} from 'arktype'

const Rating = type({
    rate: 'number',
    count: 'number',
});

export const ProductShema = type({
    id: type('number').brand("productId"),
    title: 'string',
    price: 'number',
    description: 'string',
    category: 'string',
    image: 'string',
    rating: Rating,
});


export const ProductsShema = ProductShema.array();

export type Products = typeof ProductsShema.infer;
export type Product = typeof ProductShema.infer;
