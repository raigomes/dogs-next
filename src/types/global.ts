export type FormState = {
  data: string | Data | null;
  ok: boolean;
  error: string | null;
};

export interface Data {
  [key: string]: string;
}

export interface IPhoto {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: number;
}

export interface IError {
  code?: string;
  message?: string;
  data?: {
    status?: number;
  };
}
