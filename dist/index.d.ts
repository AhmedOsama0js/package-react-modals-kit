import { ReactNode } from "react";

type BaseProps = {
  setModel: (state: boolean) => void;
  closeOnOverlayClick?: boolean;
  bodyColor?: string;
};

type WithContent = {
  content: ReactNode;
  children?: never;
};

type WithChildren = {
  children: ReactNode;
  content?: never;
};

export type MainModalProps = BaseProps & (WithContent | WithChildren);

export interface ConfirmModalProps {
  setModel: (state: boolean) => void; // دالة لضبط حالة المودال
  message: string; // الرسالة التي سيتم عرضها
  onConfirm: () => void; // دالة عند تأكيد الإجراء
  onCancel?: () => void; // دالة عند إلغاء الإجراء
  closeOnOverlayClick?: boolean; // غلق المودال عند الضغط على الخلفية
  bodyColor?: string; // لون خلفية المودال
  confirmText?: string; // نص زر التأكيد
  cancelText?: string; // نص زر الإلغاء
  messageColor?: string; // لون نص الرسالة
  confirmBtnColor?: string; // لون زر التأكيد
  cancelBtnColor?: string; // لون زر الإلغاء
}

export interface ToastMainProps {
  setToast: (state: boolean) => void; // دالة لضبط حالة الإشعار
  message: string; // الرسالة التي سيتم عرضها في الإشعار
  duration?: number; // مدة الإشعار
  type?: "default" | "success" | "error" | "warning" | "info"; // نوع الإشعار
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center"; // مكان الإشعار
  showCloseButton?: boolean; // إذا كان يجب عرض زر الإغلاق
  showProgressBar?: boolean; // إذا كان يجب عرض شريط التقدم
  pauseOnHover?: boolean; // إذا كان يجب إيقاف التقدم عند التمرير فوق الإشعار
  backgroundColor?: string; // لون خلفية الإشعار
  textColor?: string; // لون النص في الإشعار
  progressColor?: string; // لون شريط التقدم
  closeBtnColor?: string; // لون زر الإغلاق
}

declare const MainModal: (props: MainModalProps) => JSX.Element;
declare const ConfirmationModal: (props: ConfirmModalProps) => JSX.Element;
declare const ToastMain: (props: ToastMainProps) => JSX.Element;

export { MainModal, ConfirmationModal, ToastMain };
