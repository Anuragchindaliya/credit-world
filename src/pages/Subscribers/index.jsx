import React from "react";
import { useMutation, useQuery } from "react-query";
import { downloadCSV, getAllSubs } from "../../api";
import TableLayout from "../../components/TableLayout";
const SubsColumns = [
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
];
const DownloadCSV = () => {
  return (
    <>
      <DownloadButton />
      <SubsTable />
    </>
  );
};
const DownloadButton = () => {
  const { data } = useQuery("subs", getAllSubs, {
    refetchOnWindowFocus: false,
  });
  const { mutateAsync: getCSV, isLoading: isDownloading } =
    useMutation(downloadCSV);
  const handleDownload = async () => {
    const result = await getCSV();
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const count = data?.data?.count;
  return (
    <section
      className=""
      // wow fadeInUp"
      // data-wow-delay="100ms"
    >
      <div
        className="container py-4 "
        // cta-2-area"
      >
        <div className="row">
          <div className="col-12">
            {/* Cta Content */}
            <div className="cta-content d-flex flex-wrap align-items-center justify-content-between">
              <div className="cta-text">
                <h4 className="text-xl">All Subscribers ({count})</h4>
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
                  // className="btn credit-btn box-shadow"
                  className="btn  box-shadow bg-danger  rounded text-white"
                >
                  {isDownloading ? <>Downloading...</> : <>Download CSV</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const SubsTable = () => {
  const columns = React.useMemo(() => SubsColumns, []);
  const { data, isLoading, isError, error } = useQuery("subs", getAllSubs, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="container py-4  d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary mx-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <h4 className="text-xl">Loading Subscribers...</h4>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="container py-4  d-flex justify-content-center align-items-center">
        <h4 className="text-xl">{error.response.data.message}</h4>
      </div>
    );
  }
  return (
    <section className="container">
      <TableLayout data={data?.data?.result} columns={columns} />
    </section>
  );
};

export default DownloadCSV;
