/*

Kategori sayfalarını otomatik olarak oluşturabilirim.
mysql'e eklenen son makalelerin adlarını çekerim
  mysql tablosu örneği:
   [kategoriAdi, makaleAdi, makaleURL, eklenmeTarihi, okunmaSayısı, okunmaTarihiDizisi]
   [filmler, "2023 yılında Kesinlikle izlenilmesi gereken filmler!", 
   "2023-yilinda-kesinlikle-izlenilmesi-gereken-filmler",
   "12.09.2023", 1052, [10.09.2023-11.09.2023-12.09.2023]]
otomatik olarak sunucuda oluşturup kullanıcıya sunabilirim.
Eğer yeni bir makale eklenmemişse tekrar render edilmesini engellerim.

Sayfa sıralama çubuğunda ise verileri mysql'den sıralayarak isterim

*/

export default function index({}) {
  return (
    <div>
      filmler yolunun ana sayfası
    </div>
  )
}