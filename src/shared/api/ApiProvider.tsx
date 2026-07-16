import {type ReactNode} from 'react';
import type {ApiClient} from './client';
import {ApiContext} from "./ApiContext.ts";

export const ApiProvider = ({client, children}: {client: ApiClient; children: ReactNode}) => (
    <ApiContext value={client}>{children}</ApiContext>
);
