export type LoginState = {
  data: string | Data | null;
  ok: boolean;
  error: string | null;
};

export interface Data {
  [key: string]: string;
}
