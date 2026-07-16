import {assign, fromPromise, setup} from "xstate";

export const createCounterMachine = (
    onChangeRef: { current: (v: number) => Promise<void> }
) =>
    setup({
        types: {
            context: {} as { quantity: number },
            events: {} as
                | { type: 'USER_UPDATE'; quantity: number }
                | { type: 'EXTERNAL_UPDATE'; quantity: number }
                | { type: 'SUBMIT' },
            input: {} as { quantity: number },
        },
        actors: {
            submitChange: fromPromise(({input}: { input: { quantity: number } }) =>
                onChangeRef.current(input.quantity)
            ),
        },
    }).createMachine({
        id: 'counter',
        initial: 'idle',
        context: ({input}) => ({quantity: input.quantity}),
        states: {
            idle: {
                on: {
                    USER_UPDATE: {
                        target: 'interacting',
                        actions: assign({quantity: ({event}) => event.quantity}),
                    },
                    EXTERNAL_UPDATE: {
                        actions: assign({quantity: ({event}) => event.quantity}),
                    },
                },
            },
            interacting: {
                on: {
                    USER_UPDATE: {
                        actions: assign({quantity: ({event}) => event.quantity}),
                    },
                    SUBMIT: {target: 'submitting'},
                },
            },
            submitting: {
                invoke: {
                    src: 'submitChange',
                    input: ({context}) => ({quantity: context.quantity}),
                    onDone: {target: 'idle'},
                    onError: {target: 'idle'},
                },
            },
        },
    });