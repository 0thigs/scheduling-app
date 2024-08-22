import { NextResponse } from "next/server";
import supabase from "./config/supabaseClient";

export function middleware(request:any) {
  const { pathname } = new URL(request.url);

  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    console.log(supabase)
    return NextResponse.redirect(url)
  }

  return NextResponse.next();
}