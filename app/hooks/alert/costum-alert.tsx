"use client";
import { toast } from "react-hot-toast";
import { createContext, useContext, useState } from "react";
import { AlertContexType } from "@/app/types/ui";
import { ModalProps } from "@/app/types/ui";
import { ToastProps } from "@/app/types/ui";
import Container from "@/app/ui/container";
import { Text } from "@/app/ui/Text";
import { useEffect } from "react";
import { AlertModal } from "@/app/core/components/alert-modal";
import { ToastEffect } from "@/app/core/components/alert-toast";
const AlertContex = createContext<AlertContexType | undefined>(undefined);

export const useAlert = (): AlertContexType => {
  const contex = useContext(AlertContex);
  if (!contex) throw new Error("useAlert must be used within an AlertProvider");
  return contex;
};
export const AlertProvinder = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalProps | null>(null);
  const [resolver, setResolver] = useState<(res: boolean) => void>();

  const toastAlert = ({ message, title, icon, onVoid }: ToastProps) => {
    toast.custom((t) => (
      <ToastEffect
        t={t}
        title={title}
        message={message}
        icon={icon}
        onVoid={onVoid}
      />
    ));
  };

  const showModal = (p: ModalProps) => {
    setModal(p);
  };

  const confirm = (p: ModalProps): Promise<boolean> => {
    setModal(p);
    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  };

  const handleConfirm = () => {
    modal?.onConfirm?.();
    setModal(null);
    resolver?.(true);
  };
  const handleCancel = () => {
    modal?.onConfirm?.();
    setModal(null);
    resolver?.(true);
  };

  return (
    <AlertContex.Provider
      value={{ toast: toastAlert, modal: showModal, confirm }}
    >
      {children}
      {modal && (
        <AlertModal
          open={!!modal}
          setOpen={() => setModal(null)}
          title={modal.title}
          deskripsi={modal.deskripsi}
          icon={modal.icon}
          confirmButtonText={modal.confirmButtonText || "OK"}
          confirmButtonColor={modal.confirmButtonColor || "bg-primary"}
          onConfirm={handleConfirm}
          cancelText={"Batal"}
          onCancel={handleCancel}
        />
      )}
    </AlertContex.Provider>
  );
};
