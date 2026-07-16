export const Error = ({error, resetErrorBoundary}: {error: unknown; resetErrorBoundary: () => void}) => (
    <div>
        <p>Error: {String(error)}</p>
        <button onClick={resetErrorBoundary}>Retry</button>
    </div>
);
