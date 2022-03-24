export default (state, action) => {
    switch(action.type) {
          
      case 'SETUP_WEB3':
        return {
          ...state,
          web3: action.payload,
          web3LoadingErrorMessage: "",
          web3Loadded: true
        }
      case 'SETUP_CONTRACT':
        return {
          ...state,
          contract: action.payload
        }

      case 'ADD_ETHEREUM_ACCOUNTS':
        return {
          ...state,
          accounts: action.payload
        }

      case 'WEB3_LOADING_ERROR':
        return {
          ...state,
          web3LoadingErrorMessage: action.errorMessage,
          web3Loadded: false
        }
        case 'TOTAL_MINTED':
        return {
          ...state,
          total_mint: action.payload
        }
        case 'MINT_PRICE':
        return {
          ...state,
          token_price: action.payload
        }
        case 'USER_RESERVED':
        return {
          ...state,
          user_reserved: action.payload
        }
        case 'LAUNCH_TIME':
        return {
          ...state,
          launch_time: action.payload
        }
        case 'OWNER_ACCOUNT':
        return {
          ...state,
          owner_account: action.payload
        }
        case 'SETUP_CONNECTION':
        return {
          ...state,
          connect: action.payload
        }
      default:
        return state;
    }
  }