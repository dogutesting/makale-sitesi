import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentBox from "./ContentBox";

const Content = ({ data, cats, currentPage, addRef }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);
    

  //currentPage 0 veya 0'dan küçük olamaz!
  //currentPage == 1 -> 2,3,4 renderla
  //currentPage != 1 


  const getMorePost = async () => {

    const offset = ((currentPage - 1) * 10);

    console.log("offset: " + offset);

     const params = new URLSearchParams({
        k: cats,
        l: 10,
        o: offset,
      });
  
      try {
        const response = await fetch(`/api/getArticle?${params.toString()}`);
        const newPosts = await response.json();
        setPosts((post) => [...post, ...newPosts]);
        newPosts != 10 && setHasMore(false);
      }
      catch(error) {
        console.log(error, "error");
      }

    /* const res = await fetch(
      `api/getArticle/`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]); */
  };

  /* //! USEREFLERE EKLEYECEĞİZ
  //! HASH !== 0 USERREF FALAN FİLAN  */  

  return (

    <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((row, index) => (
            <ContentBox
                key={index+1}
                url={row.url}
                baslik={row.baslik}
                resim={row.resimYolu}
                eklenmeTarihi={row.eklenmeTarihi}
                okunmaSuresi={row.okunmaSuresi + " dk"}
                kategori={row.kategori}
                paragraf={row.paragraf}
                pri={index == 0 ? true : false}
                hash={(index+1) % 10 === 1 ? Math.floor(index / 10) + 1 : 0}
                addRef={addRef}
            />
        ))}
    </InfiniteScroll>
      
  );
};

export default Content;
