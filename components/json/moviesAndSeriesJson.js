export default function json_list(type, film10, film9, film8, film7, film6, film5, film4, film3, film2, film1) {
  
  /*
  type: Movie - Series
  film10.url
  film10.name
  film10.image
  film10.date
  film10.director
  film10.actors
  film10.rating
  film10.ratingCount
  */

  return `
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": "1",
        "item": {
          "@type": "${type}",
          "url": "${film10.url}",
          "name": "${film10.name}",
          "image": "${film10.image}",
          "dateCreated": "${film10.date}",
          "director": {
              "@type": "Person",
              "name": "${film10.director}"
            },
          "actors": ${film10.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film10.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film10.rating}",
              "bestRating": "10",
              "ratingCount": "${film10.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "2",
        "item": {
          "@type": "${type}",
          "url": "${film9.url}",
          "name": "${film9.name}",
          "image": "${film9.image}",
          "dateCreated": "${film9.date}",
          "director": {
              "@type": "Person",
              "name": "${film9.director}"
            },
          "actors": ${film9.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film9.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film9.rating}",
              "bestRating": "10",
              "ratingCount": "${film9.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "3",
        "item": {
          "@type": "${type}",
          "url": "${film8.url}",
          "name": "${film8.name}",
          "image": "${film8.image}",
          "dateCreated": "${film8.date}",
          "director": {
              "@type": "Person",
              "name": "${film8.director}"
            },
          "actors": ${film8.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film8.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film8.rating}",
              "bestRating": "10",
              "ratingCount": "${film8.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "4",
        "item": {
          "@type": "${type}",
          "url": "${film7.url}",
          "name": "${film7.name}",
          "image": "${film7.image}",
          "dateCreated": "${film7.date}",
          "director": {
              "@type": "Person",
              "name": "${film7.director}"
            },
          "actors": ${film7.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film7.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film7.rating}",
              "bestRating": "10",
              "ratingCount": "${film7.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "5",
        "item": {
          "@type": "${type}",
          "url": "${film6.url}",
          "name": "${film6.name}",
          "image": "${film6.image}",
          "dateCreated": "${film6.date}",
          "director": {
              "@type": "Person",
              "name": "${film6.director}"
            },
          "actors": ${film6.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film6.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film6.rating}",
              "bestRating": "10",
              "ratingCount": "${film6.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "6",
        "item": {
          "@type": "${type}",
          "url": "${film5.url}",
          "name": "${film5.name}",
          "image": "${film5.image}",
          "dateCreated": "${film5.date}",
          "director": {
              "@type": "Person",
              "name": "${film5.director}"
            },
          "actors": ${film5.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film5.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film5.rating}",
              "bestRating": "10",
              "ratingCount": "${film5.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "7",
        "item": {
          "@type": "${type}",
          "url": "${film4.url}",
          "name": "${film4.name}",
          "image": "${film4.image}",
          "dateCreated": "${film4.date}",
          "director": {
              "@type": "Person",
              "name": "${film4.director}"
            },
          "actors": ${film4.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film4.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film4.rating}",
              "bestRating": "10",
              "ratingCount": "${film4.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "8",
        "item": {
          "@type": "${type}",
          "url": "${film3.url}",
          "name": "${film3.name}",
          "image": "${film3.image}",
          "dateCreated": "${film3.date}",
          "director": {
              "@type": "Person",
              "name": "${film3.director}"
            },
          "actors": ${film3.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film3.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film3.rating}",
              "bestRating": "10",
              "ratingCount": "${film3.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "9",
        "item": {
          "@type": "${type}",
          "url": "${film2.url}",
          "name": "${film2.name}",
          "image": "${film2.image}",
          "dateCreated": "${film2.date}",
          "director": {
              "@type": "Person",
              "name": "${film2.director}"
            },
          "actors": ${film2.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film2.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film2.rating}",
              "bestRating": "10",
              "ratingCount": "${film2.ratingCount}"
            }
          }
        }
      },

      {
        "@type": "ListItem",
        "position": "10",
        "item": {
          "@type": "${type}",
          "url": "${film1.url}",
          "name": "${film1.name}",
          "image": "${film1.image}",
          "dateCreated": "${film1.date}",
          "director": {
              "@type": "Person",
              "name": "${film1.director}"
            },
          "actors": ${film1.actors},
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "${film1.rating}"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "${film1.rating}",
              "bestRating": "10",
              "ratingCount": "${film1.ratingCount}"
            }
          }
        }
      }

      
    ]
  }
  `;
}