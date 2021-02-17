const Pagination = ({ pages, currentPage, onPreviousClick, onNextClick }) => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={onPreviousClick}>
              Previous
            </a>
          </li>
          {pages.map((p, index) => {
            return (
              <li key={index} className="page-item">
                <a className="page-link" href="#" onClick={() => currentPage(p)}>
                  {p}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a className="page-link" href="#" onClick={onNextClick}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
