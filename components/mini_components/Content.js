import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentBox from "./ContentBox";

const Content = ({ data, kategori }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);
    
  const getMorePost = async () => {

     const params = new URLSearchParams({
        k: kategori,
        l: 10,
        o: posts.length,
      });
  
      try {
        const response = await fetch(`/api/getArticle?${params.toString()}`);
        const newPosts = await response.json();
        setPosts((post) => [...post, ...newPosts]);
        newPosts != 10 && setHasMore(false);
      }
      catch(error) {
        //
      }

    /* const res = await fetch(
      `api/getArticle/`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]); */
  };

  

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
            />
        ))}
    </InfiniteScroll>
      
  );
};

export default Content;
