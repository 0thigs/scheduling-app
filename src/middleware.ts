import { NextResponse } from "next/server";
import supabase from "./utils/supabaseClient";
import isAuth from "./app/auth/isAuth";

export async function middleware(request: any) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/register') || pathname.startsWith('/about')) {
    return NextResponse.next();
  }

  const authenticated = await isAuth();
  console.log('Authenticated:', authenticated);
  if (authenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (!authenticated && pathname !== '/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
