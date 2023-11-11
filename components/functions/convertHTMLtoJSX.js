import { parse } from 'node-html-parser';
import Link from 'next/link';
import React from 'react';

const cHtmlToJsx = (html) => {
    const root = parse(html);
  
    const reactComponents = [];

    root.childNodes.forEach((node, index) => {
      if (node.nodeType === 1) { // ELEMENT_NODE
        if (node.tagName === 'LINK' || node.tagName === 'A') {
          const href = node.getAttribute('href') || '';
          const title = node.getAttribute('title') || '';
          const link = href && title ? 
            <Link key={index} href={href} title={title}>{node.innerText}</Link>
             :
            <Link key={index} href={href}>{node.innerText}</Link>;

          reactComponents.push(link);
        }
        else {
          const dnyamicElement = React.createElement(node.tagName, {
            dangerouslySetInnerHTML: {__html: node.innerHTML},
            key: {index}
          })
          reactComponents.push(dnyamicElement);
        }
      } else if (node.nodeType === 3) { // TEXT_NODE
        reactComponents.push(node.text)
      }
    });
    return reactComponents;
  }
  export default cHtmlToJsx;