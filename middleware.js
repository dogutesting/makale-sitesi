import { NextResponse } from 'next/server';

const topLevelUrl = "http://localhost:3000";

const getDateAndTime = () => {
  const now = new Date();
  const saat = now.getHours().toString().padStart(2, '0');
  const dakika = now.getMinutes().toString().padStart(2, '0');
  const gun = now.getDate().toString().padStart(2, '0');
  const ay = (now.getMonth() + 1).toString().padStart(2, '0'); // Ay 0'dan başladığı için +1 ekliyoruz.
  const yil = now.getFullYear();
  const tarihVeSaat = `${saat}:${dakika}-${gun}.${ay}.${yil}`;
  //setCurrentDate(tarihVeSaat);
  return tarihVeSaat;
}

const customFetch = (id, ci, pathname) => {
  fetch(topLevelUrl+"/api/userKey", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      req: "waypoint",
      "type": type,
      "data": {
        user: {
          "id": id,
          "ci": ci
        },
        status: {
          "pathname": pathname,
          "date": getDateAndTime()
        }
      }
    })
  }).catch(error => {
    //
  });
}

export default function middleware(request) {
  const response = NextResponse.next();
  if(request.method === "GET") {
    if(request.nextUrl.pathname !== "/" && request.nextUrl.pathname !== "/404") {
      const pathname_1 = request.nextUrl.pathname.substring(1);
      let id = request.cookies.get("id")?.value || "cookie-id";
      let ci = request.cookies.get("ci")?.value || "cookie-ci";
      customFetch(id, ci, pathname_1)
    }
  }

  return response;
}

export const config = {
  // Tek 1 istek atması için düzenleme.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}