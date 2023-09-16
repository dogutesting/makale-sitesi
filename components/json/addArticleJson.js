export default function addArticleJsonLd(m_kategori, m_minAge, m_keyWordsArray, m_wordCount, m_baslik, m_yazar, m_logo, m_eklenmeTarihi="2023-09-12T17:20:00+03:00", m_degistirilmeTarihi, m_description, m_articleBody, m_resim, m_url, moviesAndSeriesJson) {
    return {
      __html: `[
        {
        "@context": "http://schema.org",
        "@type": "Article",
        "inLanguage": "tr-TR",

        "articleSection": "${m_kategori}",
        "typicalAgeRange": "${m_minAge}",
        "keywords": ${m_keyWordsArray},
        "wordCount": "${m_wordCount}",

        "name": "${m_baslik}",
        "headline": "${m_baslik}",
        "author": {
          "@type": "Person",
          "name": "${m_yazar}",
        },
        "editor": {
          "@type": "Person",
          "name": "${m_yazar}"
        }
        "publisher": {
          "@type": "Organization",
          "name": "En Onlar",
          "url": "https://enonlar.com",
          "logo": {
            "@type": "ImageObject",
            "width": "300",
            "height": "60",
            "url": "${m_logo}"
          }
        },
        "creator": "${m_yazar}",
        "datePublished": "${m_eklenmeTarihi}",
        "dateCreated": "${m_eklenmeTarihi}",
        "dateModified": "${m_eklenmeTarihi}",
        
        "description": "${m_description}",
        "articleBody": "${m_articleBody}",
        
        "url": "${m_url}",

        "image": "${m_resim}"
        "thumbnail": {
          "@type": "ImageObject",
          "url": "${m_resim}",
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
            "name": "${m_kategori}",
            "item": "https://enonlar.com/${m_kategori}"
          },
          {
            "@type": "ListItem",
            "position": "3",
            "name": "${m_baslik}",
            "item": "${m_url}"
          }
        ]
      },

      ${moviesAndSeriesJson}
    ]
      `,
    };
  }
