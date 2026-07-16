import {type FC, useEffect, useMemo, useRef, useState} from 'react';
import {debounce} from 'lodash';
import {useActor} from '@xstate/react';
import {createCounterMachine} from "./createCounterMachine.ts";
import {Button} from "../Button.tsx";

interface CounterProps {
    value: number;
    onChange: (value: number) => Promise<void>;
    disabled: boolean;
}


export const Counter: FC<CounterProps> = ({value, onChange, disabled}) => {
    const onChangeRef = useRef(onChange);

    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    // eslint-disable-next-line react-hooks/refs
    const [machine] = useState(() => createCounterMachine(onChangeRef));
    const [state, send] = useActor(machine, {input: {quantity: value}});

    const debouncedSubmit = useMemo(
        () => debounce(() => send({type: 'SUBMIT'}), 500),
        [send]
    );

    useEffect(() => () => debouncedSubmit.cancel(), [debouncedSubmit]);

    useEffect(() => {
        send({type: 'EXTERNAL_UPDATE', quantity: value});
    }, [send, value]);

    const update = (delta: number) => {
        const nextQuantity = Math.max(1, state.context.quantity + delta);
        send({type: 'USER_UPDATE', quantity: nextQuantity});
        debouncedSubmit();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = parseInt(e.target.value, 10);
        if (Number.isNaN(parsed)) return;
        const nextQuantity = Math.max(1, parsed);
        send({type: 'USER_UPDATE', quantity: nextQuantity});
        debouncedSubmit();
    };

    return (
        <div>
            <Button onClick={() => update(-1)} disabled={state.context.quantity <= 1 || disabled}>-</Button>
            <input type="number" value={state.context.quantity} min={1} onChange={handleInputChange}
                   disabled={disabled}/>
            <Button onClick={() => update(1)} disabled={disabled}>+</Button>
        </div>
    );
};
