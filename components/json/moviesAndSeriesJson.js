export default function json_list(articleInfos, type, summaryText, arr) {
  
  function escapeString(input) {
    return input.replace(/"/g, "'");
  }

  let articleText = "";
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

        
        articleText += " " + item.name;
        let children = item.paragraf.props.children;
        if(typeof(children) == "object") {
          children.map(child => {
            if(typeof(child) == "object") {
              articleText += " " + child.props.children;
            }
            else {
              articleText += " " + child;
            }
          })
        }
        else {
          articleText += " " + children;
        }
  })

  const articleBody = escapeString(summaryText.props.children + articleText);
  const wordCount = articleBody.split(" ").length;
  const readTime = Math.round((wordCount * 0.33) / 60);

  return {
    readTimeSpan: readTime,
    html: `[
      {
      "@context": "http://schema.org",
      "@type": "Article",
      "inLanguage": "tr-TR",

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
      "name": "List of ${type}"
      "@type": "ItemList",
      "itemListElement": ${JSON.stringify(listeArr)}
    }
  ]
    `,
  };
}