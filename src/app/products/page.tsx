"use client";

// next imports
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

// react imports
import { useCallback, useEffect, useState } from "react";

import Pagination from "./pagination";

// Sort constraints
enum SortConstraints {
  NEWEST = "newest",
  RATING = "rating",
}

// Filter constraints
enum FilterConstraints {
  CATEGORY = "category",
  PRICE = "price",
  RATING = "rating",
}
const allFilterOptions = {
  ca: [
    { label: "Mobiles", value: "mobile" },
    { label: "Furniture", value: "furniture" },
    { label: "Fashion", value: "fashion" },
    { label: "Books", value: "books" },
  ],
  pr: [
    { label: "Under ₹500", value: "0" },
    { label: "₹500 - ₹1,000", value: "1" },
    { label: "₹1,000 - ₹2,000", value: "2" },
    { label: "₹2,000 - ₹5,000", value: "3" },
    { label: "Above ₹5,000", value: "4" },
  ],
  ra: [
    { label: "★★★★☆ & Up", value: "4" },
    { label: "★★★☆☆ & Up", value: "3" },
    { label: "★★☆☆☆ & Up", value: "2" },
    { label: "★☆☆☆☆ & Up", value: "1" },
  ],
};

// miscellaneous
const ratingTable = {
  1: "★☆☆☆☆",
  2: "★★☆☆☆",
  3: "★★★☆☆",
  4: "★★★★☆",
  5: "★★★★★",
};

function getFilteredLabel(type: string, value: any) {
  return allFilterOptions[type].find((ele) => ele.value === value)?.label;
}

export default function Home() {
  // next hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const filter = searchParams.get("filter");
  const q = searchParams.get("q");
  const sort = searchParams.get("sort") || "";
  const page = searchParams.get("page") || "1";

  // state hooks
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterOption, setFilterOption] = useState({id: '', values: []});

  const updateFilterOptions = useCallback(() => {
    if (filter === "category") {
      setFilterOption({ id: "ca", values: allFilterOptions.ca });
    } else if (filter === "price") {
      setFilterOption({ id: "pr", values: allFilterOptions.pr });
    } else if (filter === "rating") {
      setFilterOption({ id: "ra", values: allFilterOptions.ra });
    }
  }, [filter]);

  // lifecycle hooks
  useEffect(() => {
    fetch(`${origin}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setProducts(data.products);
      });
  }, []);

  useEffect(() => {
    let newProductsData = [...allProducts];
    if (q) {
      const allWords = q.split(" ");
      newProductsData = [...newProductsData].filter((ele) =>
        allWords.some((word) =>
          ele.name.toLowerCase().includes(word.toLowerCase())
        )
      );
    }
    if (search) {
      const searchOptions = search?.split(" ");
      searchOptions.forEach(ele => {
        const [type, value] = ele.split("_");
        if (type === 'ca') {
          newProductsData = newProductsData.filter(el => el.category === value);
        } else if (type === 'pr') {
          if (value === "0") {
            newProductsData = newProductsData.filter((el) => el.price < 500);
          } else if (value === "1") {
            newProductsData = newProductsData.filter((el) => el.price >= 500 && el.price < 1000);
          } else if (value === "2") {
            newProductsData = newProductsData.filter((el) => el.price >= 1000 && el.price < 2000);
          } else if (value === "3") {
            newProductsData = newProductsData.filter((el) => el.price >= 2000 && el.price < 5000);
          } else if (value === "4") {
            newProductsData = newProductsData.filter((el) => el.price >= 5000);
          }
        } else if (type === 'ra') {
          if (value === "4") {
            newProductsData = newProductsData.filter((el) => el.rating >= 4);
          } else if (value === "1") {
            newProductsData = newProductsData.filter((el) => el.rating >= 3);
          } else if (value === "2") {
            newProductsData = newProductsData.filter((el) => el.rating >= 2);
          } else if (value === "3") {
            newProductsData = newProductsData.filter((el) => el.rating >= 1);
          }
        }
      });
    }
    if (sort === 'rating') {
      newProductsData.sort((a, b) => b.rating - a.rating);
    } else {
      newProductsData.sort((a, b) => b.id - a.id);
    }
    setProducts(newProductsData);
  }, [allProducts, search, q, sort]);

  useEffect(() => {
    updateFilterOptions();
  }, [filter, updateFilterOptions]);

  // component variables
  const isSortValid = Object.values(SortConstraints).includes(
    sort as SortConstraints
  );
  const isFilterValid = Object.values(FilterConstraints).includes(
    filter as FilterConstraints
  );

  // onChange methods
  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setQuery('');
    router.push(`/products?q=${query.split(" ").join("+")}`);
  };

  const onSortChange = (e) => {
    router.push(
      `/products?${filter ? "filter=" + filter + "&" : ""}${
        search ? "search=" + search + "&" : ""
      }${q ? "q=" + q + "&" : ""}sort=${e.target.value}`
    );
  };

  const removeFilter = (val) => {
    const selectedSearchList = search?.split(" ");
    const modifiedSelectedSearchList = selectedSearchList?.filter(
      (ele) => ele !== val
    );
    const routeToPush = `/products?${
      filter ? "filter=" + filter + "&" : ""
    }${modifiedSelectedSearchList && modifiedSelectedSearchList.length > 0 ? 'search=' + modifiedSelectedSearchList.join(
      "+"
    ) + '&' : ''}${q ? "q=" + q + "&" : ""}${sort ? "sort=" + sort : ""}`;
    router.push(
      routeToPush.endsWith("&")
        ? routeToPush.slice(0, routeToPush.length - 1)
        : routeToPush
    );
  };

  const clearAllFilter = () => {
    const routeToPush = `/products?${filter ? "filter=" + filter + "&" : ""}${
      q ? "q=" + q + "&" : ""
    }${sort ? "sort=" + sort : ""}`;
    router.push(
      routeToPush.endsWith("&")
        ? routeToPush.slice(0, routeToPush.length - 1)
        : routeToPush
    );
  };

  const onSearchChange = (val) => {
    const selectedSearchList = search?.split(" ");
    if (!selectedSearchList || !selectedSearchList.includes(val)) {
      const modifiedSelectedSearchList = selectedSearchList ? [...selectedSearchList, val] : [val];
      const routeToPush = `/products?${
        filter ? "filter=" + filter + "&" : ""
      }search=${modifiedSelectedSearchList.join("+")}&${q ? "q=" + q + "&" : ""}${
        sort ? "sort=" + sort : ""
      }`;
      router.push(
        routeToPush.endsWith("&")
          ? routeToPush.slice(0, routeToPush.length - 1)
          : routeToPush
      );
    }
  };

  const onFilterChange = (e) => {
    const routeToPush = `/products?filter=${e.target.value}&${
      search ? "search=" + search + "&" : ""
    }${q ? "q=" + q + "&" : ""}${sort ? "sort=" + sort : ""}`;
    router.push(
      routeToPush.endsWith("&")
        ? routeToPush.slice(0, routeToPush.length - 1)
        : routeToPush
    );
  };

  return (
    <>
      <header className="grid w-full gap-6 grid-cols-2 py-4 px-6 shadow-lg mb-8">
        <Link href="/" className="flex">
          <Image
            src="/static/images/logo.svg"
            alt="logo"
            width="72"
            height="24"
          />
        </Link>
        <div className="relative">
          <div className="absolute text-xl inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            🔍
          </div>
          <form onSubmit={onSearchSubmit}>
            <input
              type="search"
              value={query}
              onChange={onQueryChange}
              className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border-b border-b-gray-300"
              placeholder="Search"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </form>
        </div>
      </header>
      <main className="mb-20 px-6 container mx-auto">
        <div>
          {q && (
            <div>Showing results for &quot;{q.split("+").join(" ")}&quot;</div>
          )}
          <div className="flex justify-between border-y py-2 my-2">
            <div
              className={`${
                search?.split(" ").length ? "visible" : "invisible"
              } flex flex-wrap items-center gap-1`}
            >
              {search?.split(" ").map((ele) => {
                const [type, value] = ele.split("_");
                const displayValue = getFilteredLabel(type, value);
                return (
                  <span
                    key={ele}
                    className="bg-blue-100 text-gray-600 pl-3 pr-2 py-1 rounded-md cursor-default"
                  >
                    {displayValue}&nbsp;&nbsp;
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={() => removeFilter(ele)}
                    >
                      &times;
                    </span>
                  </span>
                );
              })}
              <span
                className="underline text-blue-600 ml-4 cursor-pointer"
                onClick={clearAllFilter}
              >
                Clear All
              </span>
            </div>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-40 px-2 py-1.5 max-h-8"
              onChange={onSortChange}
            >
              <option value="" disabled selected={!isSortValid}>
                -- Sort By --
              </option>
              <option
                value={SortConstraints.NEWEST}
                selected={sort === SortConstraints.NEWEST}
              >
                Newest
              </option>
              <option
                value={SortConstraints.RATING}
                selected={sort === SortConstraints.RATING}
              >
                Rating
              </option>
            </select>
          </div>
        </div>
        <div className="flex">
          <div className="w-64 pr-3 border-r min-h-80">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full px-2 py-1.5"
              onChange={onFilterChange}
            >
              <option value="" disabled selected={!isFilterValid}>
                -- Filter By --
              </option>
              <option
                value={FilterConstraints.CATEGORY}
                selected={filter === FilterConstraints.CATEGORY}
              >
                Category
              </option>
              <option
                value={FilterConstraints.PRICE}
                selected={filter === FilterConstraints.PRICE}
              >
                Price
              </option>
              <option
                value={FilterConstraints.RATING}
                selected={filter === FilterConstraints.RATING}
              >
                Rating
              </option>
            </select>
            <ul className="flex flex-col w-full">
              {filterOption?.values.map((ele) => (
                <li
                  key={ele.value}
                  className={`last:border-b-0 border-b border-gray-200`}
                  onClick={() =>
                    onSearchChange(`${filterOption.id}_${ele.value}`)
                  }
                >
                  <label className="inline-flex items-center justify-between w-full px-4 py-2 text-gray-500 bg-white cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                    <input
                      type="radio"
                      name={ele.value}
                      value={ele.value}
                      className="hidden peer"
                      required
                    />
                    <div className="block w-full">{ele.label}</div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 w-full p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
              {products
                .slice(
                  10 * (parseInt(page, 10) - 1),
                  10 * parseInt(page, 10)
                )
                .map((ele) => (
                  <div
                    key={ele.id}
                    className="bg-white rounded overflow-hidden shadow-md cursor-pointer"
                  >
                    <Image
                      className="w-full object-cover"
                      src={ele.img}
                      alt={ele.name}
                      width="72"
                      height="24"
                    />
                    <div className="px-3 py-1">
                      <div className="text-lg font-bold">{ele.name}</div>
                      <div className="text-sm text-yellow-600">
                        {ratingTable[ele.rating]}
                      </div>
                      <div className="text-2xl font-bold text-black">
                        ₹{ele.price.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                      </div>
                      <div className="text-sm line-clamp-3">
                        {ele.description}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <Pagination
              itemsCount={products.length}
              search={search}
              filter={filter}
              q={q}
              sort={sort}
              page={page}
            />
          </div>
        </div>
      </main>
    </>
  );
}
