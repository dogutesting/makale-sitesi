import { connectToDatabase } from "@/lib/mysql"
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
    
  const { params } = context;
  const { slug } = params;
  
  const connection = await connectToDatabase();
  
  //const [rows] = await connection.execute("SELECT url FROM makaleler");
  //const isSlugInDatabase = rows.some((row) => row.url === slug);
  //! daha performanslı diye alttaki kod ile değiştirdim.

  const kategori = "motosiklet";
  const [rows] = await connection.execute("SELECT COUNT(*) AS count FROM makaleler WHERE url = ? AND kategori = ?", [slug, kategori]);
  const isSlugInDatabase = rows[0].count > 0;

  connection.end();
  
  if (!isSlugInDatabase) {
    // Eğer slug veritabanında yoksa, 404 hata sayfasına yönlendir
    return {
      notFound: true,
    };
  }

  return {
      props: {
          slug
      }
  }
}

export default function BlogPost({ slug }) {
    const router = useRouter();
    
    if(router.isFallback) {
      return <>Loading...</>
    }

    const DynamicComponent = dynamic(() => import(`../${slug}`)); 
  
    return (
      <DynamicComponent />
    );
  }