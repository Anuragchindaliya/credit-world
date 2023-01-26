import React, { useEffect, useState } from "react";
import {
  useGlobalFilter,
  useTable,
  useFilters,
  usePagination,
  useResizeColumns,
  useSortBy,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import { getTableDataForExport, makeCsv } from "./utils";
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}
const RefreshButton = ({ onRefresh }) => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <button
      onClick={async () => {
        setRefreshing(true);
        const result = await onRefresh?.();
        setRefreshing(false);
      }}
      type="button"
      disabled=""
      title="refresh"
      className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm font-medium text-white transition bg-red-700 dark:hover:bg-red-600 border border-red-700 rounded appearance-none cursor-pointer select-none hover:border-red-800 hover:bg-red-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 ${refreshing ? "animate-spin" : ""}`}
        // animate-spin"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only ">Refresh...</span>
    </button>
  );
};

const MyPager = ({
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  gotoPage,
  pageCount,
  pageIndex,
  pageSize,
  rows,
  setPageSize,
  pageOptions,
  onRefresh,
  setAllFilters
}) => {
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setPageNumber(pageIndex + 1);
  }, [pageIndex]);

  const handleGotoPage = () => {
    // const page = pageNumber ? Number(pageNumber) - 1 : 0;
    const page = Number(pageNumber) - 1;
    if (page != pageIndex) {
      gotoPage(page);
    }
  };
  return (
    <nav
      className="flex flex-wrap items-center gap-3 pt-3 pb-1 text-sm"
      aria-label="Table navigation"
    >
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            disabled={!canPreviousPage}
            onClick={() => gotoPage(0)}
            title="Previous"
            className="flex px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-5"
              aria-hidden="true"
              fill="currentColor"
              //  viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              // x="0px"
              // y="0px"
              viewBox="0 0 120.64 122.88"
              xmlSpace="preserve"
              // {...props}
            >
              <path d="M66.6,108.91c1.55,1.63,2.31,3.74,2.28,5.85c-0.03,2.11-0.84,4.2-2.44,5.79l-0.12,0.12c-1.58,1.5-3.6,2.23-5.61,2.2 c-2.01-0.03-4.02-0.82-5.55-2.37C37.5,102.85,20.03,84.9,2.48,67.11c-0.07-0.05-0.13-0.1-0.19-0.16C0.73,65.32-0.03,63.19,0,61.08 c0.03-2.11,0.85-4.21,2.45-5.8l0.27-0.26C20.21,37.47,37.65,19.87,55.17,2.36C56.71,0.82,58.7,0.03,60.71,0 c2.01-0.03,4.03,0.7,5.61,2.21l0.15,0.15c1.57,1.58,2.38,3.66,2.41,5.76c0.03,2.1-0.73,4.22-2.28,5.85L19.38,61.23L66.6,108.91 L66.6,108.91z M118.37,106.91c1.54,1.62,2.29,3.73,2.26,5.83c-0.03,2.11-0.84,4.2-2.44,5.79l-0.12,0.12 c-1.57,1.5-3.6,2.23-5.61,2.21c-2.01-0.03-4.02-0.82-5.55-2.37C89.63,101.2,71.76,84.2,54.24,67.12c-0.07-0.05-0.14-0.11-0.21-0.17 c-1.55-1.63-2.31-3.76-2.28-5.87c0.03-2.11,0.85-4.21,2.45-5.8C71.7,38.33,89.27,21.44,106.8,4.51l0.12-0.13 c1.53-1.54,3.53-2.32,5.54-2.35c2.01-0.03,4.03,0.7,5.61,2.21l0.15,0.15c1.57,1.58,2.38,3.66,2.41,5.76 c0.03,2.1-0.73,4.22-2.28,5.85L71.17,61.23L118.37,106.91L118.37,106.91z"></path>
            </svg>
          </button>
        </li>
        <li>
          <button
            disabled={!canPreviousPage}
            onClick={previousPage}
            title="Previous"
            // className="flex px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            onClick={nextPage}
            disabled={!canNextPage}
            // className="flex px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"

            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="flex px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-5"
              aria-hidden="true"
              fill="currentColor"
              //  viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              // x="0px"
              // y="0px"
              viewBox="0 0 120.64 122.88"
              xmlSpace="preserve"
              // {...props}
            >
              <path d="M54.03 108.91a8.288 8.288 0 00-2.28 5.85c.03 2.11.84 4.2 2.44 5.79l.12.12c1.58 1.5 3.6 2.23 5.61 2.2 2.01-.03 4.01-.82 5.55-2.37 17.66-17.66 35.13-35.61 52.68-53.4.07-.05.13-.1.19-.16a8.335 8.335 0 002.28-5.87 8.323 8.323 0 00-2.45-5.8l-.27-.26C100.43 37.47 82.98 19.87 65.46 2.36A7.956 7.956 0 0059.92 0c-2.01-.03-4.03.7-5.61 2.21l-.15.15a8.318 8.318 0 00-2.41 5.76c-.03 2.1.73 4.22 2.28 5.85l47.22 47.27-47.22 47.67zm-51.77-2A8.265 8.265 0 000 112.74c.03 2.11.84 4.2 2.44 5.79l.12.12c1.57 1.5 3.6 2.23 5.61 2.21 2.01-.03 4.02-.82 5.55-2.37C31.01 101.2 48.87 84.2 66.39 67.12c.07-.05.14-.11.21-.17a8.335 8.335 0 002.28-5.87 8.323 8.323 0 00-2.45-5.8C48.94 38.33 31.36 21.44 13.83 4.51l-.12-.13a7.945 7.945 0 00-5.54-2.35c-2.01-.03-4.03.7-5.61 2.2l-.15.15A8.336 8.336 0 000 10.14c-.03 2.1.73 4.22 2.28 5.85l47.18 45.24-47.2 45.68z" />
            </svg>
          </button>
        </li>
      </ul>
      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
        Page
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // console.log("submit");
            handleGotoPage();
            // gotoPage(Number(pageNumber)-1);
          }}
        >
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-14 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="number"
            value={pageNumber}
            // defaultValue={pageIndex + 1}
            onChange={(e) => {
              setPageNumber(e.target.value);
            }}
            onBlur={(e) => {
              // console.log("blur");
              // const page = e.target.value ? Number(e.target.value) - 1 : 0;
              // gotoPage(page);
              handleGotoPage();
            }}
            min={1}
            max={pageOptions.length}
          />
        </form>
        <strong>
          of{" "}
          <span className="text-gray-900 dark:text-white">
            {pageOptions.length}
          </span>
        </strong>
      </span>

      <RefreshButton onRefresh={onRefresh} />
      <button
    onClick={() => setAllFilters([])}
    type="button"
    disabled=""
    title="Reset filter"
    className="hidden sm:inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm  text-white transition bg-red-700 dark:hover:bg-red-600 border border-red-700 rounded appearance-none cursor-pointer select-none hover:border-red-800 hover:bg-red-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"
  >
    RESET
  </button>

      <div className="ml-auto text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pageIndex * pageSize + 1}-
          {pageSize > rows.length
            ? rows.length
            : pageIndex * pageSize + pageSize}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {rows.length}
        </span>
      </div>
      <select
        className="block w-15 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </nav>
  );
};
const TableLayout = ({ data, columns, onRefresh }) => {
  const defaultColumn = React.useMemo(
    () => ({
      // minWidth: 30,
      // width: 80,
      // maxWidth: 100,
      width: "auto",
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageSize: 50,
      },
    },
    useResizeColumns,
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize, globalFilter},
  } = tableInstance;
  console.log("tableInstance", tableInstance);
  return (
    <>
      <div className="flex gap-2 items-center mb-3">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <button
        onClick={() => {
          const csvData = rows.map((row)=>row.values);
          console.log({csvData,data});
          makeCsv(getTableDataForExport(csvData, columns), `applicants_${Date.now()}.csv`)
        }}
          className="text-red-700 bg-red-100 border border-red-200 hover:bg-red-200 hover:text-red-900 disabled:hover:bg-white focus:ring-red-700 focus:text-red-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800  group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
          type="button"
        >
          <span className="flex items-center rounded-md text-sm px-3 py-2">
            <div className="flex items-center gap-x-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                className="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Export</span>
            </div>
          </span>
        </button>
        {/* <button
          // onClick={async () => {
          //   setRefreshing(true);
          //   const result = await onRefresh?.();
          //   setRefreshing(false);
          // }}
          // onClick={() => setAllFilters([])}
          type="button"
          disabled=""
          title="reset"
        className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-red-800"

          // className="inline-flex items-center justify-center w-auto px-3 py-2 space-x-2 text-sm  text-white transition bg-red-700 dark:hover:bg-red-600 border border-red-700 rounded appearance-none cursor-pointer select-none hover:border-red-800 hover:bg-red-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:pointer-events-none disabled:opacity-75"
        >
          RESET
        </button> */}
      </div>
      <div className="relative overflow-x-auto shadow-md  table-wrp block max-h-[61.1vh] ">
        <table
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          {...getTableProps()}
        >
          <thead
            className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
             sticky top-0"
          >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th
                  scope="col"
                  className="px-3 py-2 border-[1px] dark:border-gray-600 font-bold"
                >
                  Sr
                </th>
                {headerGroup.headers.map((column) => {
                  // console.log("column",column)
                  return (
                    <th
                      scope="col"
                      className="px-3 py-2 border-[1px] dark:border-gray-600 font-bold"
                      {...column.getHeaderProps()}
                      style={{ width: column.width }}
                    >
                      <div className="flex">
                        <div>{column.render("Header")}</div>
                        {/* <span {...column.getSortByToggleProps()}>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 ml-1"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 320 512"
                            >
                              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3 ml-1"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 320 320 512"
                            >
                              <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                            </svg>
                          )
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 ml-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 310 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        )}
                        </span> */}
                      <div className="relative ml-auto">
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="h-96 overflow-y-auto">
            {page?.map((row) => {
              prepareRow(row);
              const rowIndex = row?.index + 1;
              // const stripClass =
              //   rowIndex % 2
              //     ? "bg-white dark:bg-gray-900 "
              //     : " bg-gray-50 dark:bg-gray-800";
              return (
                <tr
                  {...row.getRowProps()}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-900 hover:bg-red-50 dark:hover:bg-gray-600 "
                >
                  <td scope="row" className={"px-3 py-2 "}>
                    {rowIndex}
                  </td>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        scope="row"
                        className={
                          "px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border dark:border-gray-700"
                          // +stripClass
                        }
                        // className="px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border"
                        {...cell.getCellProps()}
                        // style={{
                        //   padding: "10px",
                        //   border: "solid 1px gray",
                        //   background: "papayawhip",
                        // }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Sliver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <MyPager
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageSize={pageSize}
        rows={rows}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        onRefresh={onRefresh}
        setAllFilters={setAllFilters}
      />
    </>
  );
};

export default TableLayout;
