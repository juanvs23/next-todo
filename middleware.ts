import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log({ request });
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/api/entries/getentries',
    '/api/entries/addentry',
    '/api/entries/deleteentry',
    '/api/entries/updatentry',
  ],
};
