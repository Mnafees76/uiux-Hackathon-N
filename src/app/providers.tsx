 "use client"
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


export default function Providers({ children}: { children: React.ReactNode}){
     let persistore = persistStore(  store )
     return(
        <Provider store={store}>                
         <PersistGate persistor={ persistore}>
         {children}
         </PersistGate>
         </Provider>
     )
}