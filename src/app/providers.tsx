"use client"

import React from "react";
import StoreProvider    from "../state/redux";
import { Provider } from "react-redux";
import { makeStore } from "../state/redux";

/* const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={makeStore()}>
      <StoreProvider>{children}</StoreProvider>
    </Provider>
  );
} */
  const Providers = ({ children }: { children: React.ReactNode }) => {
    return <StoreProvider>{children}</StoreProvider>;
  };

  export default Providers;