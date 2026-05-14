function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) return null;

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        Previous
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
