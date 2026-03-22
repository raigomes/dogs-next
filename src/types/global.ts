export type LoginState = {
  data: string | IToken | null;
  ok: boolean;
  error: string | null;
};

export interface IToken {
  token: string;
}
