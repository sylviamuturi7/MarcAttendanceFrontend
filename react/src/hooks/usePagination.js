import { useState } from "react";

// totalPages is required so we can prevent going past the last page
const usePagination = (initialPage = 1, pageSize = 10, totalPages = 1) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => {
    setPage((p) => {
      if (p >= totalPages) return p;
      return p + 1;
    });
  };

  const prevPage = () => {
    setPage((p) => Math.max(p - 1, 1));
  };

  const goToPage = (p) => {
    const clamped = Math.min(Math.max(p, 1), totalPages);
    setPage(clamped);
  };

  return {
    page,
    pageSize,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;
