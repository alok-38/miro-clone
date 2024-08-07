import { NextResponse, NextRequest, NextFetchEvent } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

// Define middleware function
export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  // Allow access to /create-organization and its sub-routes
  if (pathname.startsWith("/create-organization")) {
    return NextResponse.next();
  }

  // Apply Clerk middleware to other routes
  return clerkMiddleware()(req, event);
}

// Configuration for the middleware
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|api|trpc|create-organization).*)", // Exclude /create-organization and other static assets
    "/",
  ],
};
