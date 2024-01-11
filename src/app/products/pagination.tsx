import { useRouter } from "next/navigation";

export default function Pagination(props) {
  // react hooks
  const router = useRouter();

  // props extraction
  const { itemsCount, search, filter, q, sort, page } = props;
  let currentPage = parseInt(page || "1", 10);
  if (isNaN(currentPage)) currentPage = 1;

  // component variables
  const qParam = `?${search ? "search=" + search + "&" : ""}${
    filter ? "filter=" + filter + "&" : ""
  }${q ? "q=" + q + "&" : ""}${sort ? "sort=" + sort + "&" : ""}`;

  const pageCount =
    Math.floor(itemsCount / 10) + (itemsCount % 10 === 0 ? 0 : 1);
  const pageCountToDisplay = pageCount > 5 ? 5 : pageCount;
  return (
    <div className="text-center block">
      <button
        type="button"
        className="uppercase mr-4 mt-8 cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => router.push(`/products${qParam}page=1`)}
      >
        First
      </button>
      <button
        type="button"
        className="uppercase mx-4 mt-8 cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => router.push(`/products${qParam}page=${currentPage - 1}`)}
      >
        Previous
      </button>
      {[...Array(pageCountToDisplay)].map((_ele, index) => (
        <button
          key={index}
          type="button"
          className={
            (currentPage === index + 1 ? "underline border-2 " : "") +
            "mx-1 mt-8 p-4 cursor-pointer"
          }
          disabled={currentPage === index + 1}
          onClick={() => router.push(`/products${qParam}page=${index + 1}`)}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        className="uppercase mx-4 mt-8 cursor-pointer"
        disabled={currentPage === pageCount}
        onClick={() => router.push(`/products${qParam}page=${currentPage + 1}`)}
      >
        Next
      </button>
      <button
        type="button"
        className="uppercase ml-4 mt-8 cursor-pointer"
        disabled={currentPage === pageCount}
        onClick={() => router.push(`/products${qParam}page=${pageCount}`)}
      >
        Last
      </button>
    </div>
  );
}
