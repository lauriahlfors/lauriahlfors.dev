export default function middleware() {}

export const config = {
  // Matcher ignoring /_next/ and /api/
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};