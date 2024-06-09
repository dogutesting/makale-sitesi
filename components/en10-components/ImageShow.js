import Image from "next/image"

export default function ImageShow ({imgUrl="/hehe"}) {
    return (
        <div id="image-show-container">
            <div id="image-show-down">
                <Image id="image-show"
                 src={imgUrl}
                  width={900}
                   height={900}
                    alt="Ürün yorum görseli"/>
                <button id="close-x"><b>Kapat</b></button>
            </div>
        </div>
    )
}