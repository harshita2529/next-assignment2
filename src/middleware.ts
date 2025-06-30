import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value //get cookie
  const isAuthenticated = !!token

  const { pathname } = request.nextUrl

  //protected routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/profile')) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  //if user is loggedIn 
  if (pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  //redirection of root path
  if (pathname === '/') {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    } else {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/dashboard', '/profile'],
}
