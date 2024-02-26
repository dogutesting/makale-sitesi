import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
/* import Footer from '@/components/Footer'; */

export default function Main({children}) {
    
  const { nightMode, setNightMode, cookie_policy_div, setCookiePolicyDiv } = useAppContext();

  const [cerez_yonetim_sayfasi, setCerezYonetimSayfasi] = useState(false);

  /* const [checked_map, setCheckedMap] = useState(new Map([
                                                          ["checkbox_1", true], 
                                                          ["checkbox_2", true],
                                                          ["checkbox_3", true]
                                                        ])); */

  const [checked_map, setCheckedMap] = useState({
    "id_and_ci": true,
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
    cookies.set('cookiepolicy_status', "1", { sameSite: 'Strict', expires: expirationDate });
    cookies.set('cookies_accepted', JSON.stringify(checked_map), {sameSite: "Strict", expires: expirationDate});
  }

  const accept_all_cookie = async () => {
    setCookiePolicyDiv(false);
    setCerezYonetimSayfasi(false);
    const jsCookie = await import('js-cookie');
    const cookies = jsCookie.default;
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    cookies.set('cookiepolicy_status', "1", { sameSite: 'Strict', expires: expirationDate });

    cookies.set('cookies_accepted', JSON.stringify({
      "id_and_ci": true,
      "custom_ad": true,
      "site_traffic": true,
    }), {sameSite: "Strict", expires: expirationDate});
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
              <p>Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak, içerikleri ve reklamları kişiselleştirmek ve site trafiğimizi analiz etmek için kullanıyoruz. Çerezler hakkında daha fazla bilgi için <Link href={"/cerez-politikasi"}>Çerez Politikası</Link> sayfamızı ziyaret edebilirsiniz. 'Kabul Et' seçeneğiyle Çerez Politikasını hızlıca kabul edebilirsiniz ve bu uyarı bir yıl boyunca <b>tekrar gösterilmez.</b></p>
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
                      <h2> ID ve CI çerezi</h2>
                      <label className="switch">
                        <input type="checkbox" name='id_and_ci' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>ID ve CI çerezi tarayıcınızda tutulur, sevebileceğiniz makaleleri önermek için faydalıdır.
                       ID çerezi 1 yıl boyunca tarayıcınızda saklanır ve süre sonunda yok edilir.
                        Okuduğunuz makalelere benzer makaleleri önermek için kullanılır.
                         CI çerezi sadece oturum süresince tarayıcınızda tutulur.
                          Sayfa kapandığında bu çerez anında yok edilir.
                           Şehrinizde popüler makaleleri göstermek için IP üzerinden bulunduğunuz şehir tahmin edilir.
                            Her zaman doğru sonuç vermez ve sadece bulunduğunuz şehri tahmin edebilir.</p>
                  </div>

                  <div>
                    <div className='slider_button_container'>
                      <h2> Kişiselleştirilmiş Reklamlar</h2>
                      <label className="switch">
                        <input type="checkbox" name='custom_ad' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>İlginize uygun reklamları göstermek için tarayıcıya çerezler tanımlar ve çerezleri 3. taraf ile paylaşabilir(Örneğin: Google Reklam Ağı). Reklam kazancımızı arttırmamız için gerekli bir çerezdir.</p>
                  </div>

                  <div>
                    <div className='slider_button_container'>
                      <h2> Site Trafiği</h2>
                      <label className="switch">
                        <input type="checkbox" name='site_traffic' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked/>
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <hr></hr>
                    <p>Site trafiğini hesaplamak ve diğer detayları göstermek için kullanılan Google Analytics'in tanımladığı çerezler.</p>
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
