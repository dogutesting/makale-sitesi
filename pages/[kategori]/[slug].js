import { useRouter } from 'next/router';

function MyPage() {
  const router = useRouter();
  const { kategori, slug } = router.query;

  return (
    <div>
      <h1>Kategori: {kategori}</h1>
      <p>Slug: {slug}</p>
      {/* Sayfa içeriğini burada oluşturun */}
    </div>
  );
}

export default MyPage;
