import { useState } from "react";

const usePagination = (initialPage = 1, pageSize = 10) => {
  const [page, setPage] = useState(initialPage);

  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));
  const goToPage = (p) => setPage(p);

  return {
    page,
    pageSize,
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;