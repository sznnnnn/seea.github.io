import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // 添加安全相关的headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Content-Type', 'text/html; charset=utf-8')
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  
  return response
}

export const config = {
  matcher: '/:path*',
} 