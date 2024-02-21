import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
/* import Footer from '@/components/Footer'; */

export default function Main({children}) {
    
  const { nightMode, setNightMode, cookie_policy_div, setCookiePolicyDiv } = useAppContext();

  const [cerez_yonetim_sayfasi, setCerezYonetimSayfasi] = useState(false);
  
  /* const [checkbox_1, setCheckBox1] = useState(true);
  const [checkbox_2, setCheckBox2] = useState(true);
  const [checkbox_3, setCheckBox3] = useState(true);
  const [checkbox_4, setCheckBox4] = useState(true); */

  const [checked_map, setCheckedMap] = useState(new Map([
                                                          ["checkbox_1", true], 
                                                          ["checkbox_2", true],
                                                          ["checkbox_3", true]
                                                        ]));

  const updateMap = (k, v) => {
    setCheckedMap(new Map(checked_map.set(k, v)));
  }

  const accept_selected_cookie = () => {
    console.log(checked_map);
  }

  const accept_all_cookie = () => {
    
    setCerezYonetimSayfasi(false);
    //! Accept all cookie

  }

  return (
    <> 
        {
          cookie_policy_div === true && (
            <div id='cookie_div'>
              <h1>Web Sitemiz Çerez Kullanıyor</h1>
              <p>Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak, içerikleri ve reklamları kişiselleştirmek ve site trafiğimizi analiz etmek için kullanıyoruz. Çerezler hakkında daha fazla bilgi için <Link href={"/cerez-politikasi"}>Çerez Politikası</Link> sayfamızı ziyaret edebilirsiniz. 'Kabul Et' seçeneğiyle Çerez Politikasını hızlıca kabul edebilirsiniz ve bu uyarı bir yıl boyunca <b>tekrar gösterilmez.</b></p>
              <div id='cookie_buttons'>
                <button onClick={() => { setCerezYonetimSayfasi(true); setCookiePolicyDiv(false)}}>Çerez Yönetimi</button>
                <button onClick={() => {setCookiePolicyDiv(false)}}>Tüm Çerezleri Kabul Et</button>
              </div>
            </div>
          )
        }
        {
          cerez_yonetim_sayfasi && (
            <div id='custom_cookie_container'>
              <div id='custom_cookie'>
                <div id='cc_top'>
                  <h1>Çerez Yönetimi</h1>
                  <p>İzin vermek istediğiniz çerezleri seçin ve onaylayın.</p>
                </div>
                <div id='cc_bottom'>
                  <button onClick={accept_selected_cookie}>İşaretli Çerezleri Kabul Et</button>
                  <button onClick={accept_all_cookie}>Tüm Çerezleri Kabul Et</button>
                </div>
                <div id='cc_center'>
                  <hr></hr>
                  <div>
                    <input type="checkbox" name='checkbox_1' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked/>
                    <span> ID ve CI çerezi</span>
                    <p>ID ve CI çerezi tarayıcınızda tutulur, sevebileceğiniz makaleleri önermek için faydalıdır.
                       ID çerezi 1 yıl boyunca tarayıcınızda saklanır ve süre sonunda yok edilir.
                        Okuduğunuz makalelere benzer makaleleri önermek için kullanılır.
                         CI çerezi sadece oturum süresince tarayıcınızda tutulur.
                          Sayfa kapandığında bu çerez anında yok edilir.
                           Şehrinizde popüler makaleleri göstermek için IP üzerinden bulunduğunuz şehir tahmin edilir.
                            Her zaman doğru sonuç vermez ve sadece bulunduğunuz şehri tahmin edebilir.</p>
                  </div>
                  <div>
                    <input type="checkbox" name='checkbox_2' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked/>
                    <span> Kişiselleştirilmiş Reklamlar</span>
                    <p>İlginize uygun reklamları göstermek için tarayıcıya çerezler tanımlar ve çerezleri 3. taraf ile paylaşabilir. (Örneğin: Google Reklam Ağı)</p>
                  </div>
                  <div>
                    <input type="checkbox" name='checkbox_3' onChange={(e) => updateMap(e.target.name, e.target.checked)} defaultChecked/>
                    <span> Site Trafiği</span>
                    <p>Site trafiğini hesaplamak ve diğer detayları göstermek için kullanılan Google Analytics'in tanımladığı çerezler.</p>
                  </div>
                </div>
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
