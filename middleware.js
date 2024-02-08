import { NextResponse } from 'next/server';

/* let num = 0; */
const click_server_name = "http://localhost:4541";

export function middleware(request) {
  const response = NextResponse.next();

  if(request.method === "GET") {
    if(request.nextUrl.pathname !== "/" && request.nextUrl.pathname !== "/404") {
      const pathname_1 = request.nextUrl.pathname.substring(1);
      const id = request.cookies.get("id")?.value;
      const ci = request.cookies.get("ci")?.value;
      customFetch(id, ci, pathname_1);    
    }
  }
  if(request.method === "POST") {
    console.log("hello from post: ", request.nextUrl.pathname);
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
    }).catch(error => {
      //
    })  */
}