export interface FormValues {
  email: string;
  password: string;
}

export interface Customer {
  name: string;
  street: string;
  city: string;
  ZIP: number;
  country: string;
  ICO: number;
  DIC: number;
}

export interface Provider extends Customer {
  invoiceNumber: number;
  registered: string;
  IBAN: string;
}
