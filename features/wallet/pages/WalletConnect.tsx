import useAptos from "../hooks/useAptos";

export const getServerSideProps = async () => {
    return {
        props: {},
    };
};

export default function WalletConnectPage() {
    const { account, getAdress, disconnect, connected } = useAptos();
    return (
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            <div className="bg-white border-2 border-gray-400 rounded p-8 w-[320px]">
                <h1 className="text-2xl font-bold mb-4">
                    Connect Aptos Wallet
                </h1>

                <div>
                    <button
                        className="bg-black text-white rounded px-4 py-2"
                        onClick={!connected ? getAdress : disconnect}
                    >
                        {!connected ? "Connect" : "Disconnect"} Wallet
                    </button>
                </div>

                <p className="break-all text-sm">{account}</p>
            </div>
        </div>
    );
}
