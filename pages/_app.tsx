import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import {
    WalletProvider,
    MartianWalletAdapter,
} from "@manahippo/aptos-wallet-adapter";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            retry: 1,
            staleTime: 1000 * 5,
        },
    },
});

function App({ Component, pageProps }: AppProps) {
    return (
        <WalletProvider
            wallets={[new MartianWalletAdapter()]}
            autoConnect={false}
            onError={(error) => console.error(error)}
        >
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <ToastContainer />
                    <Component {...pageProps} />
                </QueryClientProvider>
            </RecoilRoot>
        </WalletProvider>
    );
}

export default App;
