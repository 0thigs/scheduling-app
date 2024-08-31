import { NextResponse } from "next/server";
import supabase from "./utils/supabaseClient";

export async function middleware(request: any) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith('/_next') || pathname.startsWith('/static') || pathname.startsWith('/favicon.ico') || pathname.startsWith('/register') || pathname.startsWith('/about')) {
    return NextResponse.next();
  }

  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }
  
  if (!session && pathname !== '/login') {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
