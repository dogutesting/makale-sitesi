import { parse } from 'node-html-parser';
import Link from 'next/link';


//sadece link dönderirsen çalışıyor

const cHtmlToJsx = (html) => {
    // HTML'i parse edin
    const root = parse(html);
  
    // Dönüştürülen elementleri bir array olarak tutun
    const reactComponents = [];
  
    // Root içindeki her düğüm için işlem yapın
    root.childNodes.forEach((node) => {
      if (node.nodeType === 1) { // ELEMENT_NODE
        if (node.tagName === 'a') {
          // <link> öğesi için özel bir dönüşüm yapın
          // `node` burada bir HTMLElement nesnesidir, bu yüzden onun özelliklerine göre işlem yapmanız gerekecek
          const href = node.getAttribute('href') || ''; // Link URL'sini alın
          const title = node.getAttribute('title') || '';
          const link = href && title ? 
            <Link href={href} title={title}>{node.innerText}</Link>
             :
            <Link href={href}>{node.innerText}</Link>;

          reactComponents.push(<Link href={href}>{node.innerText}</Link>);
        } else {
          // Basit HTML elementleri için doğrudan içeriği alın
          //reactComponents.push(node.outerHTML);
          /* reactComponents.push(<p>{node.outerHTML}</p>); */
          reactComponents.push(<Link href='/'>wow</Link>)
        }
      } else if (node.nodeType === 3) { // TEXT_NODE
        //reactComponents.push(node.text);
        /* reactComponents.push(<p>{node.text}</p>); */
        reactComponents.push(<Link href='/'>wow2</Link>)
        
      }
    });
  
    /* const linkt = <Link href={"/?kategori=motosiklet"}>what</Link>;
    const arr = [];
    arr.push(linkt);
    arr.push("text"); */
    // Elde edilen React bileşenlerini döndür
    return reactComponents;
    /* return arr; */
  }

  export default cHtmlToJsx;