

export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}

export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
}

export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}

export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}

export const totalMinted = (value) => {
    return {
        type: 'TOTAL_MINTED',
        payload: value
    };
}


export const mintPrice = (value) => {
    return {
        type: 'MINT_PRICE',
        payload: value
    };
}

export const whiteMintPrice = (value) => {
    return {
        type: 'WHITE_MINT_PRICE',
        payload: value
    };
}

export const userReserved = (value) => {
    return {
        type: 'USER_RESERVED',
        payload: value
    };
}

export const launchTime = (value) => {
    return {
        type: 'LAUNCH_TIME',
        payload: value
    };
}

export const ownerAccount = (value) => {
    return {
        type: 'OWNER_ACCOUNT',
        payload: value
    };
}

export const setupConnection = (conn) => {
    return {
        type: 'SETUP_CONNECTION',
        payload: conn
    };
}