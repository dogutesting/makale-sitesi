export default function json_list(articleInfos, type, arr) {
  
  
  let wordCount = "", articleBody = "";

  //wordCount and articleBody düzenlenecek
  //JSON+LD düzenlenecek

  const listeArr = [];
  arr.map((item, index) => {
    
      listeArr.push(
        {
            "@type": "ListItem",
            "position": (index+1),
            "item": {
              "@type": type,
              "url": item.url,
              "name": item.name,
              "image": item.image,
              "dateCreated": item.date,
              "director": {
                  "@type": "Person",
                  "name": item.director
                },
              "actor": item.actors,
              "duration": item.duration,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": item.ratingValue,
                "bestRating": "10",
                "ratingCount": item.ratingCount
              }
            }
          }
        );

        //wordCount ve articleBody kodları burada yazılmalı item.paragraf ->

  })

  console.log(JSON.stringify(listeArr));
  
  return {
    __html: `[
      {
      "@context": "http://schema.org",
      "@type": "Article",
      "inLanguage": "tr-TR",

      "articleSection": "${articleInfos.kategori}",
      "typicalAgeRange": "${articleInfos.minAge}",
      "keywords": ${JSON.stringify(articleInfos.keywordsArray)},

      "wordCount": "${wordCount}",

      "name": "${articleInfos.baslik}",
      "headline": "${articleInfos.baslik}",
      "author": {
        "@type": "Person",
        "name": "${articleInfos.yazar}",
      },
      "editor": {
        "@type": "Person",
        "name": "${articleInfos.yazar}"
      }
      "publisher": {
        "@type": "Organization",
        "name": "En Onlar",
        "url": "https://enonlar.com",
        "logo": {
          "@type": "ImageObject",
          "width": "300",
          "height": "60",
          "url": "${articleInfos.logo}"
        }
      },
      "creator": "${articleInfos.yazar}",
      "datePublished": "${articleInfos.eklenmeTarihi}",
      "dateCreated": "${articleInfos.eklenmeTarihi}",
      "dateModified": "${articleInfos.eklenmeTarihi}",
      "description": "${articleInfos.description}",

      "articleBody": "${articleBody}",
      
      "url": "${articleInfos.url}",

      "image": "${articleInfos.ana_resim}"
      "thumbnail": {
        "@type": "ImageObject",
        "url": "${articleInfos.ana_resim}",
      },
    },

    {
      "@context": "https://schema.org",
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
          "item": "https://enonlar.com/${articleInfos.kategori}"
        },
        {
          "@type": "ListItem",
          "position": "3",
          "name": "${articleInfos.baslik}",
          "item": "${articleInfos.url}"
        }
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": ${JSON.stringify(listeArr)}
    }
  ]
    `,
  };
}