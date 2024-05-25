
export function HepsiburadaListItem ({name, yildiz, fiyat, yorumlar, urun_linki}) {
    return (
      <>
         <Image src="/images/ana_gorseller/ataturk_kapak.jpg" alt="name görseli" width={200} height={200}/>
         <h2>Name: item1</h2>
         <div>Yıldız</div>
         <div>327 TL</div>
         <button>Yorumları Göster</button>
         <Link href="/">Ürün Linki</Link>
      </>
    );
  }