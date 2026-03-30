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

export interface IPhotoStats {
  id: number;
  title: string;
  acessos: number;
}

export interface IComment {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_author_IP: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_content: string;
  comment_karma: string;
  comment_approved: string;
  comment_agent: string;
  comment_type: string;
  comment_parent: string;
  user_id: string;
}
