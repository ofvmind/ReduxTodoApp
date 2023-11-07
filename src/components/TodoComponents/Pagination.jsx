import { usePagination } from "../../hooks/usePagination";

export const Pagination = ({ changePage, page, totalPages }) => {
  const pagesArray = usePagination(totalPages);

  return (
    <div className="pages">
      {pagesArray.map((p) => (
        <p
          className={p === page ? "page current__page" : "page"}
          key={p}
          onClick={changePage.bind(null, p)}
        >
          {p}
        </p>
      ))}
    </div>
  );
};
