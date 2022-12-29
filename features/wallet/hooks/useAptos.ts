import { useWallet, MartianWalletName } from "@manahippo/aptos-wallet-adapter";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useAptos() {
    const { connect, connected, account, disconnect } = useWallet();

    const getAdress = async () => {
        connect(MartianWalletName);
    };

    return {
        account: account?.address?.toString(),
        connected,
        getAdress,
        disconnect,
    };
}
