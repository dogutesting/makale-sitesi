import ContentBox from "./ContentBox";

const Posts = ({ posts, nightMode, supportWebp, setHandleCategory }) => {

  return (
    <>
      {
        posts.map((row, index) => (
            index == 2 || index == 5 || index == 8 ? (
              <div key={index+"_n0"}>
                <ContentBox
                    key={index+"_n1"}
                    url={row.url}
                    baslik={row.baslik}
                    resim={row.resimYolu}
                    eklenmeTarihi={row.eklenmeTarihi}
                    okunmaSuresi={row.okunmaSuresi + " dk"}
                    kategori={row.kategori}
                    paragraf={row.paragraf}
                    pri={false}
                    nightMode={nightMode}
                    supportWebp={supportWebp}
                    setHandleCategory={setHandleCategory}
                />
                <ins 
                key={index+"_google_ad"}
                className="adsbygoogle"
                style={{display: "block"}}
                data-ad-client="ca-pub-1092443878501202"
                data-ad-slot="9300484291"
                data-ad-format="auto"
                data-full-width-responsive="true"/>
              </div>
            )
            :
            (
              <ContentBox
                  key={index+"_n2"}
                  url={row.url}
                  baslik={row.baslik}
                  resim={row.resimYolu}
                  eklenmeTarihi={row.eklenmeTarihi}
                  okunmaSuresi={row.okunmaSuresi + " dk"}
                  kategori={row.kategori}
                  paragraf={row.paragraf}
                  pri={false}
                  nightMode={nightMode}
                  supportWebp={supportWebp}
                  setHandleCategory={setHandleCategory}
              />
            )
          )
        )
      }
    </>
  )

  /* return (
    <>
      {
        posts.map((row, index) => (
            <ContentBox
              key={index+"_n1"}
              url={row.url}
              baslik={row.baslik}
              resim={row.resimYolu}
              eklenmeTarihi={row.eklenmeTarihi}
              okunmaSuresi={row.okunmaSuresi + " dk"}
              kategori={row.kategori}
              paragraf={row.paragraf}
              pri={index === 0}
              nightMode={nightMode}
              supportWebp={supportWebp}
              setHandleCategory={setHandleCategory}
            />
          )
        )
      }
    </>
  ) */

};

export default Posts;