import React from "react";
import { useMutation, useQuery } from "react-query";
import { useTable } from "react-table";
import api, { downloadCSV, getAllSubs } from "../../api";

const DownloadCSV = () => {
  return (
    <>
      <DownloadButton />
      <CSVTable />
    </>
  );
};
const DownloadButton = () => {
  const { mutateAsync: getCSV, isLoading: isDownloading } =
    useMutation(downloadCSV);
  const handleDownload = async () => {
    console.log("clicks");
    const result = await getCSV();
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "applicats.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <section
      className=""
      // wow fadeInUp"
      // data-wow-delay="100ms"
    >
      <div
        className="container pt-5 "
        // cta-2-area"
      >
        <div className="row">
          <div className="col-12">
            {/* Cta Content */}
            <div className="cta-content d-flex flex-wrap align-items-center justify-content-between">
              <div className="cta-text">
                <h4>
                  {/* Are you in need for a Credit Card? Get in touch with us. */}
                  All Credit card applicants
                </h4>
              </div>
              <div className="cta-btn">
                {/* <a
                  href={`${api?.getUri()}/subs/export`}
                  className="btn credit-btn box-shadow"
                  download="credit.csv"
                >
                  download
                </a> */}
                <button
                  onClick={handleDownload}
                  className="btn credit-btn box-shadow"
                >
                  {isDownloading ? <>Loading...</> : <>Download CSV</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const CSVTable = () => {
  const { data, isLoading } = useQuery("subs", getAllSubs, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log({ data });
  return (
    <section className="container py-5">
      <h1>All Applicants</h1>
      <TableLayout data={data?.data?.result} />
    </section>
  );
};

const TableLayout = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "ITR",
        accessor: "itr",
      },
      {
        Header: "cardUser",
        accessor: "cardUser",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Pincode",
        accessor: "pincode",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="table-responsive">
      <table
        className="table table-bordered"
        {...getTableProps()}
        style={{ border: "solid 1px blue", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DownloadCSV;
