import {useRemoveFromBasket, type Product} from '@/shared/api';
import {Button} from "@/shared/ui";

export const RemoveFromBasket = ({productId}: {productId: Product['id']}) => {
    const {mutate, isPending} = useRemoveFromBasket();

    return <Button onClick={() => mutate(productId)} disabled={isPending}>Remove from basket</Button>;
};
