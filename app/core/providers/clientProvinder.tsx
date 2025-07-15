"use client";
import { store, persistor } from "@/app/stores/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useIsMobile } from "../../hooks/Mobile/use-mobile";
import { MobileContex } from "../../hooks/Mobile/use-mobile";
import { Toaster } from "react-hot-toast";
import { AlertProvinder } from "@/app/hooks/alert/costum-alert";
import ReactQueryClientProvinder from "@/app/hooks/query/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/app/hooks/theme/use-theme";

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
          <ThemeProvider>
            <AlertProvinder>
              <ReactQueryClientProvinder>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </ReactQueryClientProvinder>
              <Toaster
                position="top-center"
                toastOptions={{
                  duration: 900,
                }}
              />
            </AlertProvinder>
          </ThemeProvider>
        </MobileContex.Provider>
      </PersistGate>
    </Provider>
  );
}
