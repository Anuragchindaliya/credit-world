import React, { useMemo } from "react";
import Loader from "../../../components/ui/button/Loader";
import TableLayout from "../../../components/ui/TableLayout";
import {
  useApplicantsQuery,
  useExportApplicantCSVMutation,
} from "./applicantApi";
import SubsColumns from "./columns";

const ApplicantTable = () => {
  const columns = useMemo(() => SubsColumns, []);
  const { data, error, isLoading, isError, refetch } = useApplicantsQuery();
  const [downlaodCSV, { isLoading: isDownloading }] =
    useExportApplicantCSVMutation();
  const handleDownload = async () => {
    const result = await downlaodCSV();
    const csvData = result?.error?.data || result?.data;
    const url = window.URL.createObjectURL(new Blob([csvData]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `applicants_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const banksData = useMemo(() => {
    const result = data?.result;
    if (!Boolean(result)) {
      return [];
    }
    const allBankCount = data?.result.reduce((acc, cur) => {
      const { bankId, bankName } = cur;
      acc[bankId]
        ? ++acc[bankId].count
        : (acc[bankId] = { bankName, count: 1 });
      return acc;
      // return (acc[bankId]=(acc[bankId] || {bankName,count:1}),acc)
    }, {});
    return Object.values(allBankCount);
  }, [data?.result]);
  // console.log({ banksData });
  // const content =
  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-70px)] justify-center items-center dark:text-white">
        <Loader className="w-12 h-12 " /> Loading Applicants...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="flex flex-col h-[calc(100vh-70px)] justify-center items-center dark:text-white text-2xl">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-40 h-40 dark:text-gray-600"
          >
            <path
              fill="currentColor"
              d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
            />
            <rect width={176} height={32} x={168} y={320} fill="currentColor" />
            <polygon
              fill="currentColor"
              points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
            />
            <polygon
              fill="currentColor"
              points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
            />
          </svg>
        </div>
        Looks like our services are currently offline
      </div>
    );
  }
  return (
    <div className="px-4 py-2 ">
      <div className="flex items-center pb-2">
        <h2 className="text-2xl font-semibold sm:text-3xl dark:text-gray-100">
          Applicants
        </h2>
        <div className="m-auto hidden sm:flex gap-4 font-semibold">
          {banksData?.map((bd, i) => {
            const { bankName, count } = bd;
            return (
              <div
                className="shadow hover:shadow-lg rounded-lg overflow-hidden flex"
                key={i}
                title={`${bankName} recived ${count} applicants`}
              >
                <div className="bg-blue-200 w-full h-full px-3 py-1">
                  {bankName}
                </div>
                <div className="bg-red-600 text-white px-3 py-1 ">{count}</div>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleDownload}
          // className="btn credit-btn box-shadow"
          // className="btn  box-shadow bg-danger  rounded text-white"
          title="Download Applicant CSV"
          className="flex items-center justify-between ml-auto md:px-3 p-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm dark:bg-red-700 dark:hover:bg-red-600"
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
      <TableLayout data={data.result} columns={columns} onRefresh={refetch} />
    </div>
  );
};

export default ApplicantTable;
