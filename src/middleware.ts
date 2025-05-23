import { type NextRequest } from "next/server";

import { updateSession } from "./lib/db/supabase/middleware";

export const middleware = async (request: NextRequest) => {
  // TODO: remove test logs
  console.log("running middleware...");
  return await updateSession(request);
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
