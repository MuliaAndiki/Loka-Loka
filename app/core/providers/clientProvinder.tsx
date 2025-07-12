"use client";
import { store, persistor } from "@/app/stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { useIsMobile } from "../../hooks/Mobile/use-mobile";
import { MobileContex } from "../../hooks/Mobile/use-mobile";
import { ThemeProvider } from "@/app/hooks/theme/use-theme";
import { Toaster } from "react-hot-toast";
import { AlertProvinder } from "@/app/hooks/alert/costum-alert";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const IsMobile = useIsMobile();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <MobileContex.Provider value={IsMobile}>
            <AlertProvinder>
              {children}
              <Toaster
                position="top-center"
                toastOptions={{
                  duration: 300,
                }}
              />
            </AlertProvinder>
          </MobileContex.Provider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
