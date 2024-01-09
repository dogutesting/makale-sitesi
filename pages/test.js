/* import 'intersection-observer'; */
import { Suspense, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Hello from "./hello";

let number = 0;

export default function test () {

    const classicArticleRefs = useRef([]);
    const currentPageRef = useRef(1);

    const handleScrollToPage = (pageNumber) => {
        console.log(`Kullanıcı şu an sayfa ${pageNumber}'da`);
        // Burada sayfa değiştiğinde yapılacak işlemleri ekleyebilirsiniz
      };
    
      //! sorun burada bir yerde
      /* const handleScroll = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageIndex = classicArticleRefs.current.indexOf(entry.target);
            if (currentPageRef.current !== pageIndex + 1) {
              console.log("şu an: " + (pageIndex + 1) + " sayfasındasınız");
              currentPageRef.current = pageIndex + 1;
              handleScrollToPage(pageIndex + 1);
            }
          }
        });
      }; */
      
      
      const handleScroll = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {                
                console.log("Element is visible: ", entry.target.style.backgroundColor);
            }
        })
      }

      const checkEntries = (observer) => {
        classicArticleRefs.current.forEach((ref) => {
            if (ref && ref instanceof Element) {
                observer.observe(ref);
            }
        });
      }
      
      
      useEffect(() => {
        console.log("started: ");

        
        //! KULLANICI ADBLOCK KULLANDIĞINDA observer kodu çalışmıyor

        /* const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        if(isChrome) {
            window.addEventListener('scroll', handleScrollForChrome);
        } */

        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver(handleScroll, options);
        checkEntries(observer);

        window.addEventListener('scroll', () => {
            /* const observer = new IntersectionObserver(handleScroll, options);
            checkEntries(observer);     */
        });
    
        return () => {
            /* window.removeEventListener('scroll', () => checkEntries); */

            observer.disconnect();
        };
      }, []);
    
      const addRef = (val) => {
        /* refArray.current.push(val); */
        console.log("added: " + (number += 1) + " - ", val);
        if(val && classicArticleRefs.current.indexOf(val) === -1) {
          classicArticleRefs.current.push(val);
          /* setDummyState((prevState) => prevState + 1); */
          /* observer.observe(val); */
        }
      }

  return (
    <>
        <p style={{backgroundColor: "red"}} ref={addRef}>
        Nostrud occaecat Lorem enim excepteur eiusmod aliquip pariatur incididunt quis tempor ipsum occaecat irure. Quis voluptate tempor exercitation deserunt ut veniam proident nulla pariatur ut eu sit sit et. Adipisicing incididunt ex dolor velit.

Nostrud ut do ipsum adipisicing deserunt culpa ipsum in ipsum nulla commodo eu minim. Aute culpa commodo eiusmod dolor fugiat. Tempor voluptate cupidatat fugiat laborum dolor et sunt ex nisi. Magna deserunt do non veniam mollit fugiat mollit sunt dolor laborum non ea cillum aliqua.

Sunt est occaecat quis magna excepteur ad eu consequat eu laborum commodo do. Nostrud et aute velit anim sunt. Adipisicing culpa commodo ut do enim sit sint Lorem voluptate.

Lorem excepteur ea dolor ipsum ex pariatur commodo anim fugiat velit culpa. Adipisicing sit in enim cillum voluptate reprehenderit commodo cupidatat cupidatat aute minim laboris aute. Lorem nostrud ullamco id anim irure labore exercitation cillum proident dolor mollit amet eiusmod laborum. Ad qui reprehenderit est aute.

Ipsum dolor tempor dolor aliqua est nulla reprehenderit laborum qui exercitation mollit. Id labore Lorem do sit est ut exercitation do minim quis dolor officia anim. Ipsum amet Lorem aliquip velit dolore Lorem consectetur. Voluptate aute occaecat nisi nostrud dolor. Aute eiusmod sunt Lorem sit labore velit incididunt sint non laborum ullamco veniam in. Lorem sit aute proident consequat non incididunt tempor quis ut sint.

Laborum ipsum irure tempor ad. Eiusmod exercitation labore exercitation excepteur adipisicing proident sit et velit commodo mollit. Tempor enim pariatur laborum cupidatat dolor enim irure irure ullamco eu mollit adipisicing dolor cillum. Cupidatat officia consectetur qui voluptate ullamco eu quis non aliquip excepteur veniam aliquip. Id do aute irure magna minim culpa voluptate aute occaecat sint. Id et ullamco adipisicing mollit pariatur pariatur minim dolore ipsum mollit cupidatat labore incididunt dolore. Pariatur in duis anim sit exercitation.

Non in id ea officia cupidatat proident cupidatat elit fugiat exercitation consequat laborum excepteur nostrud. Veniam consectetur laborum duis anim ad consequat reprehenderit minim. Enim eu laborum officia qui ea culpa deserunt irure quis.

Et aute excepteur duis eiusmod reprehenderit cupidatat. Ullamco occaecat sint velit culpa culpa quis dolore. Non ipsum incididunt irure ipsum irure aliquip veniam. Esse velit non pariatur excepteur consectetur quis est.

Reprehenderit nulla in irure deserunt duis. Do adipisicing sunt do non nisi esse nulla. Cupidatat elit aliqua magna excepteur. Eiusmod minim sunt nulla ex exercitation laborum in dolor ad exercitation. Amet nisi enim reprehenderit ut Lorem irure ad esse duis ipsum. Mollit consequat duis nisi nostrud adipisicing. Irure nostrud consequat sunt cillum aliquip consequat quis.

Mollit duis in Lorem in cupidatat et ea ipsum aliqua quis laborum culpa. Laborum labore id id adipisicing quis. Dolore Lorem qui do duis ea exercitation sint. Nulla ea non ex ex nulla commodo Lorem. Consequat laborum irure adipisicing ut sint esse veniam.
            Nostrud occaecat Lorem enim excepteur eiusmod aliquip pariatur incididunt quis tempor ipsum occaecat irure. Quis voluptate tempor exercitation deserunt ut veniam proident nulla pariatur ut eu sit sit et. Adipisicing incididunt ex dolor velit.

Nostrud ut do ipsum adipisicing deserunt culpa ipsum in ipsum nulla commodo eu minim. Aute culpa commodo eiusmod dolor fugiat. Tempor voluptate cupidatat fugiat laborum dolor et sunt ex nisi. Magna deserunt do non veniam mollit fugiat mollit sunt dolor laborum non ea cillum aliqua.

Sunt est occaecat quis magna excepteur ad eu consequat eu laborum commodo do. Nostrud et aute velit anim sunt. Adipisicing culpa commodo ut do enim sit sint Lorem voluptate.

Lorem excepteur ea dolor ipsum ex pariatur commodo anim fugiat velit culpa. Adipisicing sit in enim cillum voluptate reprehenderit commodo cupidatat cupidatat aute minim laboris aute. Lorem nostrud ullamco id anim irure labore exercitation cillum proident dolor mollit amet eiusmod laborum. Ad qui reprehenderit est aute.

Ipsum dolor tempor dolor aliqua est nulla reprehenderit laborum qui exercitation mollit. Id labore Lorem do sit est ut exercitation do minim quis dolor officia anim. Ipsum amet Lorem aliquip velit dolore Lorem consectetur. Voluptate aute occaecat nisi nostrud dolor. Aute eiusmod sunt Lorem sit labore velit incididunt sint non laborum ullamco veniam in. Lorem sit aute proident consequat non incididunt tempor quis ut sint.

Laborum ipsum irure tempor ad. Eiusmod exercitation labore exercitation excepteur adipisicing proident sit et velit commodo mollit. Tempor enim pariatur laborum cupidatat dolor enim irure irure ullamco eu mollit adipisicing dolor cillum. Cupidatat officia consectetur qui voluptate ullamco eu quis non aliquip excepteur veniam aliquip. Id do aute irure magna minim culpa voluptate aute occaecat sint. Id et ullamco adipisicing mollit pariatur pariatur minim dolore ipsum mollit cupidatat labore incididunt dolore. Pariatur in duis anim sit exercitation.

Non in id ea officia cupidatat proident cupidatat elit fugiat exercitation consequat laborum excepteur nostrud. Veniam consectetur laborum duis anim ad consequat reprehenderit minim. Enim eu laborum officia qui ea culpa deserunt irure quis.

Et aute excepteur duis eiusmod reprehenderit cupidatat. Ullamco occaecat sint velit culpa culpa quis dolore. Non ipsum incididunt irure ipsum irure aliquip veniam. Esse velit non pariatur excepteur consectetur quis est.

Reprehenderit nulla in irure deserunt duis. Do adipisicing sunt do non nisi esse nulla. Cupidatat elit aliqua magna excepteur. Eiusmod minim sunt nulla ex exercitation laborum in dolor ad exercitation. Amet nisi enim reprehenderit ut Lorem irure ad esse duis ipsum. Mollit consequat duis nisi nostrud adipisicing. Irure nostrud consequat sunt cillum aliquip consequat quis.

Mollit duis in Lorem in cupidatat et ea ipsum aliqua quis laborum culpa. Laborum labore id id adipisicing quis. Dolore Lorem qui do duis ea exercitation sint. Nulla ea non ex ex nulla commodo Lorem. Consequat laborum irure adipisicing ut sint esse veniam.
        </p>
        
        <p style={{backgroundColor: "yellow"}} ref={addRef}>
        Nostrud occaecat Lorem enim excepteur eiusmod aliquip pariatur incididunt quis tempor ipsum occaecat irure. Quis voluptate tempor exercitation deserunt ut veniam proident nulla pariatur ut eu sit sit et. Adipisicing incididunt ex dolor velit.

Nostrud ut do ipsum adipisicing deserunt culpa ipsum in ipsum nulla commodo eu minim. Aute culpa commodo eiusmod dolor fugiat. Tempor voluptate cupidatat fugiat laborum dolor et sunt ex nisi. Magna deserunt do non veniam mollit fugiat mollit sunt dolor laborum non ea cillum aliqua.

Sunt est occaecat quis magna excepteur ad eu consequat eu laborum commodo do. Nostrud et aute velit anim sunt. Adipisicing culpa commodo ut do enim sit sint Lorem voluptate.

Lorem excepteur ea dolor ipsum ex pariatur commodo anim fugiat velit culpa. Adipisicing sit in enim cillum voluptate reprehenderit commodo cupidatat cupidatat aute minim laboris aute. Lorem nostrud ullamco id anim irure labore exercitation cillum proident dolor mollit amet eiusmod laborum. Ad qui reprehenderit est aute.

Ipsum dolor tempor dolor aliqua est nulla reprehenderit laborum qui exercitation mollit. Id labore Lorem do sit est ut exercitation do minim quis dolor officia anim. Ipsum amet Lorem aliquip velit dolore Lorem consectetur. Voluptate aute occaecat nisi nostrud dolor. Aute eiusmod sunt Lorem sit labore velit incididunt sint non laborum ullamco veniam in. Lorem sit aute proident consequat non incididunt tempor quis ut sint.

Laborum ipsum irure tempor ad. Eiusmod exercitation labore exercitation excepteur adipisicing proident sit et velit commodo mollit. Tempor enim pariatur laborum cupidatat dolor enim irure irure ullamco eu mollit adipisicing dolor cillum. Cupidatat officia consectetur qui voluptate ullamco eu quis non aliquip excepteur veniam aliquip. Id do aute irure magna minim culpa voluptate aute occaecat sint. Id et ullamco adipisicing mollit pariatur pariatur minim dolore ipsum mollit cupidatat labore incididunt dolore. Pariatur in duis anim sit exercitation.

Non in id ea officia cupidatat proident cupidatat elit fugiat exercitation consequat laborum excepteur nostrud. Veniam consectetur laborum duis anim ad consequat reprehenderit minim. Enim eu laborum officia qui ea culpa deserunt irure quis.

Et aute excepteur duis eiusmod reprehenderit cupidatat. Ullamco occaecat sint velit culpa culpa quis dolore. Non ipsum incididunt irure ipsum irure aliquip veniam. Esse velit non pariatur excepteur consectetur quis est.

Reprehenderit nulla in irure deserunt duis. Do adipisicing sunt do non nisi esse nulla. Cupidatat elit aliqua magna excepteur. Eiusmod minim sunt nulla ex exercitation laborum in dolor ad exercitation. Amet nisi enim reprehenderit ut Lorem irure ad esse duis ipsum. Mollit consequat duis nisi nostrud adipisicing. Irure nostrud consequat sunt cillum aliquip consequat quis.

Mollit duis in Lorem in cupidatat et ea ipsum aliqua quis laborum culpa. Laborum labore id id adipisicing quis. Dolore Lorem qui do duis ea exercitation sint. Nulla ea non ex ex nulla commodo Lorem. Consequat laborum irure adipisicing ut sint esse veniam.
            Nostrud occaecat Lorem enim excepteur eiusmod aliquip pariatur incididunt quis tempor ipsum occaecat irure. Quis voluptate tempor exercitation deserunt ut veniam proident nulla pariatur ut eu sit sit et. Adipisicing incididunt ex dolor velit.

Nostrud ut do ipsum adipisicing deserunt culpa ipsum in ipsum nulla commodo eu minim. Aute culpa commodo eiusmod dolor fugiat. Tempor voluptate cupidatat fugiat laborum dolor et sunt ex nisi. Magna deserunt do non veniam mollit fugiat mollit sunt dolor laborum non ea cillum aliqua.

Sunt est occaecat quis magna excepteur ad eu consequat eu laborum commodo do. Nostrud et aute velit anim sunt. Adipisicing culpa commodo ut do enim sit sint Lorem voluptate.

Lorem excepteur ea dolor ipsum ex pariatur commodo anim fugiat velit culpa. Adipisicing sit in enim cillum voluptate reprehenderit commodo cupidatat cupidatat aute minim laboris aute. Lorem nostrud ullamco id anim irure labore exercitation cillum proident dolor mollit amet eiusmod laborum. Ad qui reprehenderit est aute.

Ipsum dolor tempor dolor aliqua est nulla reprehenderit laborum qui exercitation mollit. Id labore Lorem do sit est ut exercitation do minim quis dolor officia anim. Ipsum amet Lorem aliquip velit dolore Lorem consectetur. Voluptate aute occaecat nisi nostrud dolor. Aute eiusmod sunt Lorem sit labore velit incididunt sint non laborum ullamco veniam in. Lorem sit aute proident consequat non incididunt tempor quis ut sint.

Laborum ipsum irure tempor ad. Eiusmod exercitation labore exercitation excepteur adipisicing proident sit et velit commodo mollit. Tempor enim pariatur laborum cupidatat dolor enim irure irure ullamco eu mollit adipisicing dolor cillum. Cupidatat officia consectetur qui voluptate ullamco eu quis non aliquip excepteur veniam aliquip. Id do aute irure magna minim culpa voluptate aute occaecat sint. Id et ullamco adipisicing mollit pariatur pariatur minim dolore ipsum mollit cupidatat labore incididunt dolore. Pariatur in duis anim sit exercitation.

Non in id ea officia cupidatat proident cupidatat elit fugiat exercitation consequat laborum excepteur nostrud. Veniam consectetur laborum duis anim ad consequat reprehenderit minim. Enim eu laborum officia qui ea culpa deserunt irure quis.

Et aute excepteur duis eiusmod reprehenderit cupidatat. Ullamco occaecat sint velit culpa culpa quis dolore. Non ipsum incididunt irure ipsum irure aliquip veniam. Esse velit non pariatur excepteur consectetur quis est.

Reprehenderit nulla in irure deserunt duis. Do adipisicing sunt do non nisi esse nulla. Cupidatat elit aliqua magna excepteur. Eiusmod minim sunt nulla ex exercitation laborum in dolor ad exercitation. Amet nisi enim reprehenderit ut Lorem irure ad esse duis ipsum. Mollit consequat duis nisi nostrud adipisicing. Irure nostrud consequat sunt cillum aliquip consequat quis.

Mollit duis in Lorem in cupidatat et ea ipsum aliqua quis laborum culpa. Laborum labore id id adipisicing quis. Dolore Lorem qui do duis ea exercitation sint. Nulla ea non ex ex nulla commodo Lorem. Consequat laborum irure adipisicing ut sint esse veniam.
        </p>

    </>
  );
}