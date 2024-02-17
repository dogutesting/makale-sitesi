import { NextResponse } from 'next/server';
import LRUCache from 'lru-cache';
import CONSTS from '@/consts.json';

const click_server_name = "http://localhost:3000";

/* const MAX_TIMEOUT = 4 * 60 * 60 * 1000; //* 4 saat olarak ayarlandı
const ipLimits = new LRUCache(CONSTS); */

// GET IP -> LOOK IP REQUEST SIZE -> RETURN ADD OR NOT ADD

export default function middleware(request) {
  const response = NextResponse.next();
  if(request.method === "GET") {
    if(request.nextUrl.pathname !== "/" && request.nextUrl.pathname !== "/404") {
      const pathname_1 = request.nextUrl.pathname.substring(1);
      const id = request.cookies.get("id")?.value;
      const ci = request.cookies.get("ci")?.value;
      /* const ip_address = request.ip === undefined ? request.headers['x-forwarded-for'] : request.ip; */
      /* const ip_addres = (() => {
        if(request.ip === undefined || request.ip === "") {
            return request.headers['x-forwarded-for'];
                                   'x-forwarded-for'
        }
        return request.ip;
      })(); */
      console.log(request.headers['x-real-ip']);
      
    }
  }

  return response;
}

export const config = {
  // Tek 1 istek atması için düzenleme.
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

const customFetch = (id, ci, pathname, main=false) => {
    //console.log("pathname: ", pathname);
    let requestUrl = click_server_name+"/c-event/middleware";
    if(main) {
      requestUrl = click_server_name+"/c-event/main";
    }
    //console.log("middleware_fetch: ", requestUrl);
    /* fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        req: "middleware",
        auth: "Dm4i5dS",
        body: {
          user: {
            id: id,
            ci: ci  
          },
          status: {
            pathname: pathname,
            date: getDateAndTime()
          }
        }
      })
    }).catch(error => {
      //
    })  */
}