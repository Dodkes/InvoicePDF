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
