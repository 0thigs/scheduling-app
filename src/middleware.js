import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = new URL(request.url);
  if (pathname === '/') {
    const url = request.nextUrl.clone()
    console.log(url)
    url.pathname = '/login'
    console.log(url)
    return NextResponse.redirect(url)
  }
  return NextResponse.next();
}