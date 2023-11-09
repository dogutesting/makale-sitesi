import Link from "next/link";

export default function Pagination({max, active, setActive, category}) {

  const pageNumbers = [];
  for (let i = 1; i <= max; i++) {
      pageNumbers.push(i);
  }

  function createPath(pageNumber) {
    if (pageNumber === 1 && category === "hepsi" || pageNumber === undefined && category === undefined) {
      return "/";
    } else if (pageNumber === 1 && category !== "hepsi") {
      return "/?kategori=" + category;
    } else if (pageNumber !== 1 && category === "hepsi") {
      return "/?sayfa=" + pageNumber;
    } else if (pageNumber !== 1 && category !== "hepsi") {
      return "/?sayfa=" + pageNumber + "&kategori=" + category;
    }
  }

  return (
    <div className="pagination-container">
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
            <Link
                title={"Sayfa "+pageNumber}
                key={pageNumber}
                className={`page ${active == pageNumber ? 'active' : ''}`}
                onClick={() => setActive(pageNumber)}
                href={createPath(pageNumber)}
            >
                {pageNumber}
            </Link>
            ))}
        </div>
    </div>
  )
}
