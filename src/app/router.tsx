import {Routes, Route, Navigate} from 'react-router';
import {Layout} from './ui/Layout';
import {ProductsPage} from '@/pages/products';
import {BasketPage} from '@/pages/basket';

export const Router = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Navigate to="/products" replace/>}/>
                <Route path="/products" element={<ProductsPage/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
            </Route>
        </Routes>
    );
};
