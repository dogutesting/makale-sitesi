import Image from "next/image";
import Link from "next/link";
//import StarRatings from "react-star-ratings";
import dynamic from "next/dynamic";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

export function Hata ({message}) {
  return (
      <>
        {message ? message : "Sistemimiz şu an yanıt vermiyor, lütfen bir süre sonra tekrar deneyin."}
      </>
  )
}


//* STORELIST COMPONENT
export function Default_StoreList_Component ({listeAnahtari, storeValue, activeList, setActiveList, items, process}) {
  return (
    <>
      {storeValue === "Hepsiburada" && <Hepsiburada_StoreList_Component 
      listeAnahtari={listeAnahtari} 
      activeList={activeList} 
      setActiveList={setActiveList} 
      items={items} 
      process={process}/>}

      {storeValue === "Amazon" && <Amazon_StoreList_Component 
      listeAnahtari={listeAnahtari} 
      activeList={activeList} 
      setActiveList={setActiveList} 
      items={items} 
      process={process}/>}
    </>
  )
}


//* COMMENTS COMPONENT
export function Default_Comments_Component({storeValue, items}) {
  return (
    <>
      {storeValue === "Hepsiburada" && <Hepsiburada_Comments_Component items={items}/>}
      {storeValue === "Amazon" && <Amazon_Comments_Component items={items}/>}
    </>
  )
}

//#region //* StoreListDatas
export function Hepsiburada_StoreList_Component ({listeAnahtari, activeList, setActiveList, items, process}) {

  const { image, name, customerReviewRating, customerReviewCount, price, url } = items;

  return (
    <li className={['store-box', activeList == listeAnahtari ? 'store-box-active' : ''].join(' ')} 
    onClick={() => setActiveList(listeAnahtari)} 
      style={process ? {cursor: "not-allowed", opacity: 0.5, pointerEvents: "none"} : {}} >
      <Image src={image} alt={name + " görseli"} width={200} height={200} style={{borderRadius: "2px", objectFit: "contain"}}
      className="" priority={listeAnahtari==0}/>
      <h2>{name}</h2>
      <StarRatings 
        rating={customerReviewRating}
        starRatedColor="orange"
        numberOfStars={5}
        className="stars"
        starDimension="30px"
        starSpacing="5px"
      />
      <div>Değerlendirme Sayısı: {customerReviewCount}</div>
      <div>Fiyat: <strong>{price.toString().replace(".", ",")} TL</strong></div>
      <Link href={url} style={{pointerEvents: "auto"}} target="_blank" rel="noopener noreferrer">Ürün Linki</Link>
    </li>
  );
}

export function Amazon_StoreList_Component ({listeAnahtari, activeList, setActiveList, items, process}) {

  const { image, name, customerReviewRating, customerReviewCount, price, url } = items;

  return (
    <li className={['store-box', activeList == listeAnahtari ? 'store-box-active' : ''].join(' ')} 
    onClick={() => setActiveList(listeAnahtari)} 
    style={process ? {cursor: "not-allowed", opacity: 0.5, pointerEvents: "none"} : {}} >
      
      <Image src={image} alt={name + " görseli"} width={200} height={200} style={{borderRadius: "2px", objectFit: "contain"}}
      className=""/>
      
      <h2>{name}</h2>
      <StarRatings 
        rating={Number(customerReviewRating)}
        starRatedColor="orange"
        numberOfStars={5}
        className="stars"
        starDimension="30px"
        starSpacing="5px"
      />
      <div>Değerlendirme Sayısı: {customerReviewCount}</div>
      <div>Fiyat: <strong>{price}</strong></div>
      <Link href={url} style={{pointerEvents: "auto"}} target="_blank" rel="noopener noreferrer">Ürün Linki</Link>
    </li>
  );
}
//#endregion

//#region //* Comments_Components
export function Hepsiburada_Comments_Component({items}) {

  const { createdAt, customerName, star, review, mediaArray } = items;

  const date = createdAt.split("T")[0].split("-");
  const customDate = date[2] + "." + date[1] + "." + date[0];

  return (
    <li className="item-comments" /* onClick={() => setActiveList(listeAnahtari)} */>
      <h2>{customerName} - {customDate}</h2>
      <StarRatings 
        rating={star}
        starRatedColor="orange"
        numberOfStars={5}
        className="stars"
        starDimension="20px"
        starSpacing="3px"
      />
      <div>{review}</div>
      <div className="comment-image-list">
        {
          mediaArray.map((media, index) => (
            <Image key={index} src={media.url.replace("{size}", 100)} alt={customerName+ " yorum görseli " + (index+1)} height={50} width={50}
            onClick={() => alert("CV'e bu internet sitesini ekleyebilmek için splash image div kodunu yazmaya zamanım olmadı, evet şaka değil")}/>
          ))
        }
      </div>
    </li>
  )
}

export function Amazon_Comments_Component({items}) {

  const { createdAt, customerName, star, review, mediaArray } = items;

  return (
    <li className="item-comments" /* onClick={() => setActiveList(listeAnahtari)} */>
      <h2>{customerName} - {createdAt}</h2>
      
      <StarRatings 
        rating={Number(star)}
        starRatedColor="orange"
        numberOfStars={5}
        className="stars"
        starDimension="20px"
        starSpacing="3px"
      />
      <div>{review}</div>
      <div className="comment-image-list">
        {
          mediaArray.map((media, index) => (
            <Image key={index} src={media} alt={customerName+ " yorum görseli " + (index+1)} height={50} width={50}
            onClick={() => alert("sunum yapacağım için splash div kodunu yazmaya zamanım olmadı, evet şaka değil")}/>
          ))
        }
      </div>
    </li>
  )
}
//#endregion