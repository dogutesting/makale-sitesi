export default function Pagination({max, active, setActive}) {

    const handleButtonClick = (newActive) => {
        setActive(newActive);

        /* const h2Element = document.getElementById("h2-"+newActive);
        console.log(h2Element);
        h2Element.scrollIntoView({ behavior: "smooth" }); */

      };   

    const pageNumbers = [];
    for (let i = 1; i <= max; i++) {
        pageNumbers.push(i);
    }

  return (
    <div className="pagination-container">
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
            <button
                key={pageNumber}
                className={`page ${active === pageNumber ? 'active' : ''}`}
                onClick={() => handleButtonClick(pageNumber)}
            >
                {pageNumber}
            </button>
            ))}
        </div>
    </div>
  )
}
