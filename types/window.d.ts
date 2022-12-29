declare global {
    interface Window {
        aptos?: any;
    }
}

export const aptos = window?.aptos;
