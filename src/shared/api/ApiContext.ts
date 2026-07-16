import {createContext} from "react";
import type {ApiClient} from "@/shared/api/client.ts";

export const ApiContext = createContext<ApiClient | null>(null);
