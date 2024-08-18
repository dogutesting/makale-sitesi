import Link from "next/link";
import {useState, useEffect} from 'react';

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

  const[renderThis, setRenderThis] = useState();

  function createPagination(active2, pageNumbers) {
    const active = Number(active2);
    if(active == 1) {
      setRenderThis(<>
      <Link
          title={"Sayfa "+ active}
          className={`page ${active == active ? 'active' : ''}`}
          onClick={() => setActive(1)}
          href={createPath(1)}
      >
          {active}
      </Link>
      <Link
          title={"Sayfa "+ (active + 1)}
          className={`page ${active == (active + 1) ? 'active' : ''}`}
          onClick={() => setActive((active + 1))}
          href={createPath((active + 1))}
      >
          {(active + 1)}
      </Link>
      <Link
          title={"Sayfa " + (active + 2)}
          className={`page ${active == (active + 2) ? 'active' : ''}`}
          onClick={() => setActive((active + 2))}
          href={createPath((active + 2))}
      >
          {(active + 2)}
      </Link>
      </>);
    }
  
    else if(active == pageNumbers.length) {
    setRenderThis(<>
      <Link
          title={"Sayfa "+ (active - 2)}
          className={`page ${active == (active - 2) ? 'active' : ''}`}
          onClick={() => setActive((active - 2))}
          href={createPath((active - 2))}
      >
          {(active - 2)}
      </Link>
      <Link
          title={"Sayfa "+ (active - 1)}
          className={`page ${active == (active - 1) ? 'active' : ''}`}
          onClick={() => setActive((active - 1))}
          href={createPath((active - 1))}
      >
          {(active - 1)}
      </Link>
      <Link
          title={"Sayfa " + active}
          className={`page ${active == active ? 'active' : ''}`}
          onClick={() => setActive(active)}
          href={createPath(active)}
      >
          {active}
      </Link>
      </>);
    }

    else {
      setRenderThis(<>
        <Link
            title={"Sayfa "+ (active - 1)}
            className={`page ${active == (active - 1) ? 'active' : ''}`}
            onClick={() => setActive((active - 1))}
            href={createPath((active - 1))}
        >
            {active - 1}
        </Link>
        <Link
            title={"Sayfa "+ active}
            className={`page ${active == active ? 'active' : ''}`}
            onClick={() => setActive(active)}
            href={createPath(active)}
        >
            {active}
        </Link>
        <Link
            title={"Sayfa " + (active + 1)}
            className={`page ${active == (active + 1) ? 'active' : ''}`}
            onClick={() => setActive((active + 1))}
            href={createPath((active + 1))}
        >
            {(active + 1)}
        </Link>
        </>);
    }
  }

  useEffect(() => {
    createPagination(active, pageNumbers);
  }, [active])

  return (
    <div className="pagination-container">
        <div className="pagination">
            {renderThis}
        </div>
    </div>
  )
}