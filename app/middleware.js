import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Add CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // Replace * with your specific origin if needed
  res.headers.append("Access-Control-Allow-Methods", "GET, DELETE, PATCH, POST, PUT");
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

// Apply the middleware only to API routes
export const config = {
  matcher: "/api/:path*", // Middleware applies to all /api routes
};
