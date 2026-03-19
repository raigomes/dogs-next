export type RequestConfig = {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: HeadersInit;
  body?: BodyInit | null;
};

export async function requestJSON<T>(config: RequestConfig): Promise<T | null> {
  const response = await fetch(config.endpoint, {
    method: config.method,
    headers: config.headers,
    body: config.body,
  });

  if (!response.ok) return null;
  return (await response.json()) as T;
}
