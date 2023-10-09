/* import { useRouter } from 'next/router';


export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // Burada dinamik yollar için parametreler belirtilir
    ],
    fallback: true // veya false veya "blocking"
  };
}


function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;


  console.log(slug);
  return (
    <div>
      <h1>Dinamik Yol: {slug}</h1>
    </div>
  );
}

export default ArticlePage;
 */