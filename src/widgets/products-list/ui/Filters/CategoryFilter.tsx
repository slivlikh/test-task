import {useSearchParams} from 'react-router';
import {useProductsCategories} from '@/shared/api';
import {Select} from '@/shared/ui';

export const CategoryFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {data: categories} = useProductsCategories();
    const current = searchParams.get('category') ?? '';

    const options = categories.map((category) => ({
        value: category,
        label: category,
    }));

    const handleChange = (value: string) => {
        setSearchParams((prev) => {
            if (value) {
                prev.set('category', value);
            } else {
                prev.delete('category');
            }
            return prev;
        });
    };

    return (
        <Select
            value={current}
            options={options}
            placeholder="All"
            onChange={handleChange}
        />
    );
};
