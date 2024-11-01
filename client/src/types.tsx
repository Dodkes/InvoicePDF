export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues extends LoginValues {
  confirmPassword: string;
}

export interface Costumer {
  name: string;
  street: string;
  city: string;
  ZIP: number;
  country: string;
  ICO: number;
  DIC: number;
}

export interface Provider extends Costumer {
  invoiceNumber: number;
  registered: string;
  IBAN: string;
}

export type InvoiceDataProps = {
  issueDate: string;
  setIssueDate: (arg: string) => void;
  deliveryDate: string;
  setDeliveryDate: (arg: string) => void;
  dueDate: string;
  setDueDate: (arg: string) => void;
  invoiceNumber: number;
  setInvoiceNumber: (arg: number) => void;
};
