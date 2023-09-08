import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="side"></div>
        <div className="main-content">
            <div className='footer-content'>
                <div className='footer-split'>
                    <section>
                        <h2 className='section-title'>Son Yazılar</h2>
                        <ul>
                            <li key={0}><Link href="/">eiusmod tempor incididunt ut labore et dolore magna aliqua</Link></li>
                            <li key={1}><Link href="/">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</Link></li>
                            <li key={2}><Link href="/">qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</Link></li>
                            <li key={3}><Link href="/">nisi ut aliquid ex ea commodi consequatur? Quis autem</Link></li>
                            <li key={4}><Link href="/">occur in which toil and pain can procure him some great pleasure. To</Link></li>
                        </ul>
                    </section>
                </div>
                <div className='footer-split'>
                    <section>
                        <h2 className='section-title'>En Enler</h2>
                        <ul>
                            <li key={5}><Link href="/">eiusmod tempor incididunt ut labore et dolore magna aliqua</Link></li>
                            <li key={6}><Link href="/">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</Link></li>
                            <li key={7}><Link href="/">qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</Link></li>
                            <li key={8}><Link href="/">nisi ut aliquid ex ea commodi consequatur? Quis autem</Link></li>
                            <li key={9}><Link href="/">occur in which toil and pain can procure him some great pleasure. To</Link></li>
                        </ul>
                    </section>
                </div>
                <div className='footer-split'>
                    <section>
                        {/* <span className='section-title'>Günün Enleri</span> */}
                        <h2 className='section-title'>En Kategoriler</h2>
                        <ul>
                            <li key={10}><Link href="/">Teknoloji</Link></li>
                            <li key={11}><Link href="/">Film</Link></li>
                            <li key={22}><Link href="/">Spor</Link></li>
                            <li key={33}><Link href="/">Kişisel Gelişim</Link></li>
                            <li key={44}><Link href="/">Kur</Link></li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className='end'>
                <b>enonlar.com içerisinde bulunan bütün içerikler öznel yorum içermektedir. Bütün hakları saklıdır.</b>
            </div>
        </div>
        <div className="side"></div>
    </footer>
  )
}