import React, { useEffect,createContext, useReducer, useContext } from 'react';
import AppReducer from '../store/AppReducer';

import { loadBlockchain } from '../store/asyncActions';
// Initial state
const initialState = {
  web3: null,
  accounts: [],
  web3LoadingErrorMessage: "",
  web3Loadded: false,
  contract: null,
  total_mint: 0,
  token_price: 0,
  token_price1: 0,
  user_reserved: 0,
  owner_account: 0,
  launch_time:0,
  connect : 0
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
   
    // useEffect(()=> {
    //     loadBlockchain(dispatch);
    // },[])    
    

    return (<GlobalContext.Provider value={[state,dispatch]}>
                {children}
            </GlobalContext.Provider>);
}

export const useStore = () => useContext(GlobalContext);