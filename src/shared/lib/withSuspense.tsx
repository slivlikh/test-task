import {Suspense, type ComponentType} from 'react';
import {ErrorBoundary, type FallbackProps} from 'react-error-boundary';

export const withSuspense =
    (Fallback: ComponentType) =>
    (ErrorFallback: ComponentType<FallbackProps>) =>
    <P extends Record<string, unknown>>(Component: ComponentType<P>) => {
        const Wrapped = (props: P) => (
            <ErrorBoundary fallbackRender={(fallbackProps) => <ErrorFallback {...fallbackProps}/>}>
                <Suspense fallback={<Fallback/>}>
                    <Component {...props}/>
                </Suspense>
            </ErrorBoundary>
        );
        Wrapped.displayName = `withSuspense(${Component.displayName ?? Component.name ?? 'Component'})`;
        return Wrapped;
    };
