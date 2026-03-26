export type FormState = {
  data: string | Data | null;
  ok: boolean;
  error: string | null;
};

export interface Data {
  [key: string]: string;
}

export interface IError {
  code?: string;
  message?: string;
  data?: {
    status?: number;
  };
}
