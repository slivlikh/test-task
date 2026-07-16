import {useAddToBasket, type Product} from '@/shared/api';
import {Button} from "@/shared/ui";

export const AddToBasket = ({productId}: {productId: Product['id']}) => {
    const {mutate, isPending} = useAddToBasket();

    return <Button onClick={() => mutate(productId)} disabled={isPending}>Add to basket</Button>;
};
