import ContentBox from "./ContentBox";

const Posts = ({ posts, nightMode, supportWebp, setHandleCategory }) => {

  return (
      <>
        {posts.map((row, index) => (
            <ContentBox
                key={index}
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
        ))}
      </>
      
  );
};

export default Posts;
