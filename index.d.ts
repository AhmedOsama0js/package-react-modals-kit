import { ReactNode } from "react";

export interface MainModalProps {
  setModel: (state: boolean) => void;
  content: ReactNode;
  closeOnOverlayClick?: boolean;
}

export interface ConfirmModalProps {
  setModel: (state: boolean) => void;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

declare const MainModal: (props: MainModalProps) => JSX.Element;
declare const ConfirmationModal: (props: ConfirmModalProps) => JSX.Element;

export { MainModal, ConfirmationModal };
