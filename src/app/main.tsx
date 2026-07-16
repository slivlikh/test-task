import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createApiClient, ApiProvider} from '@/shared/api';
import {Router} from './router';

const queryClient = new QueryClient();
const apiClient = createApiClient({baseURL: import.meta.env.VITE_API_URL});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ApiProvider client={apiClient}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </ApiProvider>
        </QueryClientProvider>
    </StrictMode>,
);
