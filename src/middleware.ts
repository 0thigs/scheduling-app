import { NextResponse } from "next/server";
import supabase from "./utils/supabaseClient";
import AuthUser from "./app/auth/authUser";

export async function middleware(request: any) {

  const authUser = new AuthUser();
  const { pathname } = new URL(request.url);

  const isLoggedIn = await authUser.isAuth();
  console.log("Autenticado no middleware", isLoggedIn);

  if (isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (!isLoggedIn && pathname !== '/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
  else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|register|about|dashboard).*)',
  ],
};