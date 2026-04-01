export type RequestConfig = {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit | null;
  next?: {
    tags?: string[];
  };
};

export async function requestJSON<T>(config: RequestConfig): Promise<T | null> {
  const init: RequestInit = {
    method: config.method,
  };

  if (config.headers) {
    init.headers = config.headers;
  }

  if (config.body !== undefined && config.body !== null) {
    init.body = config.body;
  }

  if (config.next) {
    init.next = config.next;
  }

  const response = await fetch(config.endpoint, init);

  if (!response.ok) return (await response.json()) ?? null;
  return (await response.json()) as T;
}
