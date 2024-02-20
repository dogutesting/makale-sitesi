import { useAppContext } from '@/context/ContextProvider';
import Header from '@/components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
/* import Footer from '@/components/Footer'; */

export default function Main({children}) {
    
  const { nightMode, setNightMode, cookie_policy_div, setCookiePolicyDiv } = useAppContext();

  const [cerez_yonetim_sayfasi, setCerezYonetimSayfasi] = useState(false);

  return (
    <> 
        {
          cookie_policy_div === true && (
            <div id='cookie_div'>
              <h1>Web Sitemiz Çerez Kullanıyor</h1>
              <div>
                <p>Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak, içerikleri ve reklamları kişiselleştirmek ve site trafiğimizi analiz etmek için kullanıyoruz. Çerezler hakkında daha fazla bilgi için <Link href={"/cerez-politikasi"}>Çerez Politikası</Link> sayfamızı ziyaret edebilirsiniz. 'Kabul Et' seçeneğiyle Çerez Politikasını kabul etmiş sayılırsınız ve bu uyarı bir yıl boyunca <b>tekrar gösterilmez.</b></p>
              </div>
              <div id='cookie_buttons'>
                <button onClick={() => { setCerezYonetimSayfasi(true); setCookiePolicyDiv(false)}}>Çerez Yönetimi</button>
                <button>Tüm Çerezleri Kabul Et</button>
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
                  <input type="checkbox" checked="true"/>
                  <span>İd çerezi</span>
                  <p>Sadece 1 yıllığına tarayıcınızda tutulan çerez türüdür. Okuduğunuz makalelere benzer makaleleri önermek için kullanılır.</p>
                </div>
                <div>
                  <input type="checkbox" checked="true"/>
                  <span>Ci Çerezi</span>
                  <p>Sadece oturum süresince tarayıcınızda tutulan çerez türüdür. Sayfa kapatıldığında bu çerez yok edilir. Şehrinizde popüler makaleleri göstermek için IP üzerinden bulunduğunuz şehir tahmin edilir. Her zaman doğru sonuç vermez ve sadece bulunduğunuz şehri tahmin edebilir.</p>
                </div>
                <div>
                  <input type="checkbox" checked="true"/>
                  <span>Kişiselleştirilmiş Reklamlar</span>
                  <p>İlginize uygun reklamları göstermek için tarayıcıya çerezler tanımlar ve çerezleri 3. taraf ile paylaşabilir. (Örneğin: Google Reklam Ağı)</p>
                </div>
                <div>
                  <input type="checkbox" checked="true"/>
                  <span>Site Trafiği</span>
                  <p>Site trafiğini hesaplamak ve diğer detayları göstermek için kullanılan Google Analytics'in tanımladığı çerezler.</p>
                </div>
              </div>
              
              <div id='cc_bottom'>
                <button>İşaretlediğim Çerezleri Kabul Et</button>
                <button>Tüm Çerezleri Kabul Et</button>
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
