export const getServerSideProps = async () => {
    return {
        props: {},
    };
};

export default function WalletConnectPage() {
    return (
        <div className="bg-gray-200 w-full h-screen flex justify-center items-center">
            <div className="bg-white border-2 border-gray-400 rounded p-8">
                <h1 className="text-2xl font-bold mb-4">
                    Connect Aptos Wallet
                </h1>
                <p>wassup?</p>
            </div>
        </div>
    );
}
