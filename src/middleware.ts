import { NextResponse } from "next/server";

export function middleware(request:any) {
  const { pathname } = new URL(request.url);
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }
  return NextResponse.next();
}