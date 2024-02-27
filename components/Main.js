import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
/* import Footer from '@/components/Footer'; */

export default function Main({children}) {
    
  const { nightMode, setNightMode, cookie_policy_div, setCookiePolicyDiv, domainNameForCookies } = useAppContext();

  const [cerez_yonetim_sayfasi, setCerezYonetimSayfasi] = useState(false);

  const [checked_map, setCheckedMap] = useState({
    "id": true,
    "ci": true,
    "custom_ad": true,
    "site_traffic": true,
  })

  const updateMap = (k, v) => {
    /* setCheckedMap(new Map(checked_map.set(k, v))); */
    setCheckedMap({
      ...checked_map,
      [k]:v
    })
  }

  const accept_selected_cookie = async () => {
    setCerezYonetimSayfasi(false);
    const jsCookie = await import('js-cookie');
    const cookies = jsCookie.default;
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    cookies.set('cookiepolicy_status', "1", { domain: domainNameForCookies, sameSite: 'Strict', expires: expirationDate });
    cookies.set('cookies_accepted', JSON.stringify(checked_map), {domain: domainNameForCookies, sameSite: "Strict", expires: expirationDate});
  }

  const accept_all_cookie = async () => {
    setCookiePolicyDiv(false);
    setCerezYonetimSayfasi(false);
    const jsCookie = await import('js-cookie');
    const cookies = jsCookie.default;
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    cookies.set('cookiepolicy_status', "1", { domain: domainNameForCookies, sameSite: 'Strict', expires: expirationDate });

    cookies.set('cookies_accepted', JSON.stringify({
      "id": true,
      "ci": true,
      "custom_ad": true,
      "site_traffic": true,
    }), {domain: domainNameForCookies, sameSite: "Strict", expires: expirationDate});
  }

  useEffect(() => {
    if(cerez_yonetim_sayfasi === true) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = 'auto'; // Veya 'scroll' olarak ayarlayabilirsiniz
    };
  }, [cerez_yonetim_sayfasi])

  return (
    <> 
        {
          cookie_policy_div === true && (
            <div id='cookie_div'>
              <h1>Web Sitemiz Çerez Kullanıyor</h1>
              <p>Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak, içerikleri ve reklamları kişiselleştirerek deneyiminizi geliştirmek ve site trafiğimizi analiz etmek için kullanıyoruz. Çerezler hakkında daha fazla bilgi için <Link href={"/cerez-politikasi"}>Çerez Politikası</Link> sayfamızı ziyaret edebilirsiniz. 'Kabul Et' seçeneğiyle Çerez Politikasını hızlıca kabul edebilirsiniz ve bu uyarı bir yıl boyunca <b>tekrar gösterilmez.</b></p>
              <div id='cookie_buttons'>
                <button onClick={() => { setCerezYonetimSayfasi(true); setCookiePolicyDiv(false)}}>Çerez Yönetimi</button>
                <button onClick={() => { accept_all_cookie();}}>Tüm Çerezleri Kabul Et</button>
              </div>
            </div>
          )
        }
        {
          cerez_yonetim_sayfasi && (
              <div id='custom_cookie'>
                <div id='cc_top'>
                  <h1>Çerez Yönetimi</h1>
                  <p>İzin vermek istediğiniz çerezleri seçin ve onaylayın.</p>
                </div>

                <div id='cc_center'>
                  <div>
                    <div className='slider_button_container'>
                      <h2> Zorunlu Tanımlamalar</h2>
                      <label className="switch">
                        <input type="checkbox" defaultChecked="true" disabled="disabled"/>
                        <span className="slider round zor_checkbox_slider"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>Sitenin doğru çalışması için gerekli tanımlamaları içerir. Bunlardan biri <b>gece modunun</b> aktiflik değeri diğeri ise cihazın <b>web-p</b> resim formatını destekleyip desteklemediğinin tanımlanmasıdır. 
                    Bu tanımlamalar çerez sınıfına girmemektedir çünkü tarayıcınızın <b>Local Storage(Yerel Depolama)</b> alanına kayıt edilmektedir.  
                    Tarayıcınızın ayarlarından (Depolama - Yerel Verileri Temizle) kısmına giderek kolaylıkla kaldırabilirsiniz. Gece modu ile internet sitesinin renk modunu önceden seçtiğiniz değer ile başlatmak için kullanıyoruz. 
                    Web-p resim formatını destekleyip desteklemediğini öğrenerek sitenin daha hızlı yüklenmesini amaçlıyoruz. Herhangi bir kişisel veri içermediği ve internet sitesinin doğru çalışması için bunlar zorunludur.</p>
                  </div>

                  <div>
                    <div className='slider_button_container'>
                      <h2> ID Çerezi</h2>
                      <label className="switch">
                        <input type="checkbox" name='id' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked="true"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>ID çerezi tarayıcınızda tutulur, sevebileceğiniz makaleleri önermek için faydalıdır.
                       Sitedeki <b>sonsuz kaydırma</b> özelliğini <b>kullanabilmeniz için</b> bu seçeneğe izin vermeniz gerekmektedir.
                       ID çerezi 1 yıl boyunca tarayıcınızda saklanır ve süre sonunda yok edilir.  
                       Okuduğunuz makalelere benzer makaleleri önermek için kullanılır. Makale linklerine tıklama, url aracılığı ile sayfa isteme, 
                       sayfa başına veya sonuna varma gibi işlemler sunucuya iletilir ve kayıt altına alınır. Kayıt altına alınan veri ile 
                       hoşunuza gidebilecek makaleler tahmin edilir ve size öneriler kısmında veya sonsuz kaydırma esnasında sunulur.
                       </p>
                  </div>

                  <div>
                    <div className='slider_button_container'>
                      <h2> CI Çerezi</h2>
                      <label className="switch">
                        <input type="checkbox" name='ci' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked="true"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>CI çerezi tarayıcınızda tutulur, sevebileceğiniz makaleleri önermek için faydalıdır.
                       Sitedeki <b>sonsuz kaydırma</b> özelliğini <b>kullanabilmeniz için</b> bu seçeneğe izin vermeniz gerekmektedir.
                       CI çerezi sadece oturum süresince tarayıcınızda tutulur. Sayfa kapandığında bu çerez anında yok edilir. 
                       Şehrinizde popüler makaleleri göstermek için IP üzerinden bulunduğunuz şehir tahmin edilir. 
                       Her zaman doğru sonuç vermez ve sadece bulunduğunuz şehri tahmin edebilir. 
                       Okuduğunuz makalelere benzer makaleleri önermek için kullanılır. Makale linklerine tıklama, url aracılığı ile sayfa isteme, 
                       sayfa başına veya sonuna varma gibi işlemler sunucuya iletilir ve kayıt altına alınır. Kayıt altına alınan veri ile 
                       hoşunuza gidebilecek makaleler tahmin edilir ve size öneriler kısmında veya sonsuz kaydırma esnasında sunulur.
                       </p>
                  </div>

                  <div>
                    <div className='slider_button_container'>
                      <h2> Kişiselleştirilmiş Reklamlar</h2>
                      <label className="switch">
                        <input type="checkbox" name='custom_ad' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked="true"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>Reklam kazancımızı arttırmamız için gerekli bir çerezdir. İlginize uygun reklamları göstermek için tarayıcıya çerezler tanımlar ve çerezleri 3. taraf ile paylaşabilir(Örneğin: Google Reklam Ağı).</p>
                  </div>

                  <div>
                    <div className='slider_button_container'>
                      <h2> Site Trafiği</h2>
                      <label className="switch">
                        <input type="checkbox" name='site_traffic' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked="true"/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>Site trafiğini hesaplamak ve diğer detayları göstermek için kullanılan Google Analytics'in tanımladığı çerezler. Çok görüntülenme alan makaleleri tespit etmemize ve o makalelere benzer makaleler üretmemiz için faydalıdır.</p>
                  </div>
                </div>

                <div id='cc_bottom'>
                  <button onClick={accept_selected_cookie}>İşaretli Çerezleri Kabul Et</button>
                  <button onClick={accept_all_cookie}>Tüm Çerezleri Kabul Et</button>
                </div>
              </div>
          )
        }
        <Header nightMode={nightMode} setNightMode={setNightMode}/>
        <div className={['container', nightMode ? 'link-night' : ''].join(' ')}>
            <div className='side'></div>
            <div className={'main-content'}>
                {children}
            </div>
            <div className='side'></div>
        </div>
        {/* <Footer /> */}
    </>
  )
}
