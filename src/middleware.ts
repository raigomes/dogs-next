import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateToken } from "./actions/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isValidToken = await validateToken(token);
  if (!isValidToken) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/conta/:path*"], // protege rotas privadas
};
