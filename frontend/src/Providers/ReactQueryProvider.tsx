import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

type ReactQueryProviderProps = {
    children: ReactNode
}

export default function ReactQueryProvider({ children }: ReactQueryProviderProps): ReactElement {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}