import Link from "next/link";

export default function Pagination({max, active, setActive}) {

  const pageNumbers = [];
  for (let i = 1; i <= max; i++) {
      pageNumbers.push(i);
  }

  {/* 10 ve üzeri olunca ne olacak  */}

  return (
    <div className="pagination-container">
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
            <Link
                title={"Sayfa "+pageNumber}
                key={pageNumber}
                className={`page ${active == pageNumber ? 'active' : ''}`}
                onClick={() => setActive(pageNumber)}
                href={pageNumber === 1 ? "/" : "/?page="+pageNumber}
            >
                {pageNumber}
            </Link>
            ))}
        </div>
    </div>
  )
}
