"use client";
import { store, persistor } from "@/app/stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { useIsMobile } from "../../hooks/Mobile";
import { MobileContex } from "../../hooks/Mobile";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const IsMobile = useIsMobile();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MobileContex.Provider value={IsMobile}>
          {children}
        </MobileContex.Provider>
      </PersistGate>
    </Provider>
  );
}
