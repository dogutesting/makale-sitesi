
export const all_stores = ["Hepsiburada", "Trendyol", "Amazon", "N11", "Çiçek Sepeti", "Vatan Bilgisayar",
"Teknosa", "MediaMarkt", "Koçtaş", "Pazarama", "Carrefoursa", "PTT Avm", "Çetinkaya", "Gürgençler", "Turkcell",
"Migros", "Gratis"];

export const store_siralamasi = {
    "Hepsiburada": {
        store_siralama: {
            "Çok Değerlendirilenler": "yorumsayisi",
            "En Düşük Fiyat": "artanfiyat",
            "En Yüksek Fiyat": "azalanfiyat",
            "Çok Satanlar": "coksatan",
            "Yüksek Puanlılar": "degerlendirmepuani",
            "İndirim Oranı": "indirimurunler",
            "Yeni Eklenen": "enyeni"
        }
    },
    "Amazon": {
        store_siralama: {
            "Ort. Müşteri Yorumu": "review-rank",
            "Fiyat: Düşükten Yükseğe": "price-asc-rank",
            "Fiyat: Yüksekten Düşüğe": "price-desc-rank",
            "En Son Gelenler": "price-desc-rank"
        },
    }
}