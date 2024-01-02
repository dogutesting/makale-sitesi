import { parse } from 'node-html-parser';

export default function json_list(articleInfos, type, metin, arr) {
  
  function escapeString(input) {
    return input.replace(/"/g, "'");
  }

  function cleanText(input) {
    const root = parse(input);
    const cleanText = root.textContent;
    return cleanText;
  }

  const logo = "enonlar_logo_default.png";
  let articleText = "";
  const listeArr = [];
  arr.map((item, index) => {
    
    if(type == "Movies") {
      listeArr.push(
        {
            "@type": "ListItem",
            "position": (index+1),
            "item": {
              "@type": type,
              "url": item.url,
              "name": item.name,
              "image": item.image,
              "dateCreated": item.ozellikler["Yıl"],
              "director": {
                  "@type": "Person",
                  "name": item.ozellikler["Yönetmen"]
                },
              "actor": item.ozellikler["oyuncular"],
              "duration": item.ozellikler["Süre"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": item.ozellikler["imdb"],
                "bestRating": "10"
              }
            }
          }
        );
    }
    else if (type == "Series") {
      let dateSegments = item.ozellikler["Yıl"].split('–'); // Tarihi ayırma
      let startDate = dateSegments[0];
      let endDate = dateSegments.length > 1 ? dateSegments[1] : undefined;
    
      listeArr.push(
        {
          "@type": "ListItem",
          "position": (index+1),
          "item": {
            "@type": "TVSeries",
            "url": item.url,
            "name": item.name,
            "image": item.image,
            "startDate": startDate,
            ...(endDate && {"endDate": endDate}), // Eğer endDate varsa ekliyoruz
            "numberOfSeasons": item.eps,  // Serinin bölüm sayısını ekledik
            "director": {
                "@type": "Person",
                "name": item.ozellikler["Yönetmen"]
              },
            "actor": item.ozellikler["Oyuncular"].map(actor => { // Aktörleri doğru formatta ekliyoruz
              return {
                "@type": "Person",
                "name": actor
              };
            }),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": item.ozellikler["imdb"],
              "bestRating": "10"
            }
          }
        }
      );
    }

    else {
      listeArr.push(
        {
            "@type": "ListItem",
            "position": (index+1),
            "item": {
              "@type": type,
              "url": item.url,
              "name": item.name,
              "image": item.image
            }
          }
        );
    }
      

        
        articleText += " " + item.name + " " + cleanText(item.paragraf);
  })

  //const articleBody = escapeString(summaryText.props.children + articleText);
  const articleBody = escapeString(metin + articleText);
  const wordCount = articleBody.split(" ").length;

  //!Okunma süresini gördükten sonra sayfanın içerisindeki okumaSuresi değişkenine yaz ve bunları kapat.
  const readOn = true;
  const readTime = readOn ? Math.round((wordCount * 0.33) / 60) +"hesap" : 0;

  return {
    //!Okunma süresini gördükten sonra sayfanın içerisindeki okumaSuresi değişkenine yaz ve bunları kapat.
    readTimeSpan: readTime,
    html: `[
      {
      "@context": "http://schema.org",
      "inLanguage": "tr-TR",
      "@type": "Article",
      "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://enonlar.com/${articleInfos.url}"
      },
      "articleSection": "${articleInfos.kategori}",
      "typicalAgeRange": "${articleInfos.minAge}",
      "keywords": ${JSON.stringify(articleInfos.keywordsArray)},

      "name": "${articleInfos.baslik}",
      "headline": "${articleInfos.baslik}",
      "author": {
        "@type": "Person",
        "name": "${articleInfos.yazar}"
      },
      "editor": {
        "@type": "Person",
        "name": "${articleInfos.yazar}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "En Onlar",
        "url": "https://enonlar.com",
        "logo": {
          "@type": "ImageObject",
          "width": "234",
          "height": "45",
          "url": "https://enonlar.com/${logo}"
        }
      },
      "creator": "${articleInfos.yazar}",
      "datePublished": "${articleInfos.eklenmeTarihi}",
      "dateCreated": "${articleInfos.eklenmeTarihi}",
      "dateModified": "${articleInfos.eklenmeTarihi}",
      "description": "${articleInfos.description}",

      "wordCount": "${wordCount}",
      "articleBody": "${articleBody}",
      
      "url": "${articleInfos.url}",

      "image": "${articleInfos.ana_resim}",
      "thumbnail": {
        "@type": "ImageObject",
        "url": "${articleInfos.ana_resim}"
      }
    },

    {
      "@context": "https://schema.org",
      "name": "Breadcrumb Links",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": "1",
          "name": "Ana Sayfa",
          "item": "https://enonlar.com"
        },
        {
          "@type": "ListItem",
          "position": "2",
          "name": "${articleInfos.kategori}",
          "item": "https://enonlar.com/?kategori=${articleInfos.kategori}"
        },
        {
          "@type": "ListItem",
          "position": "3",
          "name": "${articleInfos.baslik}",
          "item": "https://enonlar.com/${articleInfos.url}"
        }
      ]
    },

    {
      "@context": "https://schema.org",
      "name": "List of ${type}",
      "@type": "ItemList",
      "itemListElement": ${JSON.stringify(listeArr)}
    }
  ]
    `,
  };
}