import React from "react";
import Loader from "../../../components/ui/button/Loader";
import TableLayout from "../../../components/ui/TableLayout";
import { useExportSubsCSVMutation, useGetSubscribersQuery } from "./applierApi";
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
const SubscribersTable = () => {
  const { data, error, isLoading, isError } = useGetSubscribersQuery();
  const [downlaodCSV, { isLoading: isDownloading, ...props }] =
    useExportSubsCSVMutation();
  const handleDownload = async () => {
    const result = await downlaodCSV();
    const url = window.URL.createObjectURL(new Blob([result.error.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `subscribers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  // const content =
  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-60px)] justify-center items-center">
        <Loader className="w-12 h-12 " /> Loading Appliers...
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        {/* {error.message} */}
        Unauthorize
      </div>
    );
  }
  return (
    <div className="p-4">
      <div className="flex items-center pb-2">
        <h2 className="text-2xl font-semibold sm:text-3xl">Subscribers</h2>
        <button
          onClick={handleDownload}
          // className="btn credit-btn box-shadow"
          // className="btn  box-shadow bg-danger  rounded text-white"
          title="Download Subscriber CSV"
          className="flex items-center justify-between ml-auto md:px-4 p-2 bg-red-600 hover:bg-red-700  rounded text-white"
        >
          {/* {isDownloading ? <>Downloading...</> : <>Download CSV</>} */}
          {isDownloading ? (
            <>
              <Loader className="text-white " />
              <div>Downloading...</div>
            </>
          ) : (
            <>
              <div className="w-6 mr-1">
                <svg
                  className=""
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>Download CSV</div>
            </>
          )}
        </button>
      </div>
      <TableLayout data={data.result} columns={SubsColumns} />
    </div>
  );
};

export default SubscribersTable;
