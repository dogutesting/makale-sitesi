import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

let num = 0;
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const response = NextResponse.next();

  console.log("middleware: " + (num++));

  const pathname = request.nextUrl.pathname;
  const id = request.cookies.get("id")?.value;
  const ci = request.cookies.get("ci")?.value;

  fetch('http://localhost:4541/c-event/middleware', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      auth: "m4i5d",
      user: {
        id: id,
        ci: ci  
      },
      status: {
        pathname: pathname,
        date: getDateAndTime()
      }
    })
  });


  return response;
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

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