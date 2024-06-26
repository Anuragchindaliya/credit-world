import React from "react";
import { useMutation, useQuery } from "react-query";
import api, { applicantsExport, getAllApplicants } from "../../api";
import TableLayout from "../../components/TableLayout";
const ApplicantsColumns = [
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
    Header: "Card User",
    accessor: "cardUser",
    Cell: ({ value }) => (value ? "YES" : "NO"),
  },
  {
    Header: "Bank Name",
    accessor: "bankName",
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
const bankId = 1;
const Applicants = () => {
  const columns = React.useMemo(() => ApplicantsColumns, []);
  const applicants = useQuery("applicants", () => getAllApplicants(bankId), {
    refetchOnWindowFocus: false,
    retry:false
  });

  const { mutateAsync: getCSV, isLoading: isDownloading } =
    useMutation(applicantsExport);

  const handleDownload = async () => {
    const result = await getCSV(bankId);
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `applicants_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const count = applicants?.data?.count;

  if (applicants?.isError) {
    return (
      <div className="container py-4  d-flex justify-content-center align-items-center h-72">
        <h4 className="text-xl">
          {applicants?.error?.response?.data?.message}
        </h4>
      </div>
    );
  }
  return (
    <section
      className=""
      // wow fadeInUp"
      // data-wow-delay="100ms"
    >
      <div
        className="container "
        // cta-2-area"
      >
        <div className="row">
          <div className="col-12">
            {/* Cta Content */}
            <div className="cta-content py-4 d-flex flex-wrap align-items-center justify-content-between">
              <div className="cta-text">
                <h4 className="text-xl">All Applicants ({count})</h4>
              </div>
              <div className="cta-btn">
                {/* <a
                  href={`${api?.getUri()}/applicants/export`}
                  //   className="btn credit-btn box-shadow"
                  className="bg-danger p-2 rounded text-white"
                >
                  Download CSV
                </a> */}
                <button
                  onClick={handleDownload}
                  // className="btn credit-btn box-shadow"
                  className="btn md:px-5 bg-danger rounded text-white"
                >
                  {isDownloading ? <>Downloading...</> : <>Download CSV</>}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            {applicants?.isLoading ? (
              <div className="container py-4  d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary mx-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
                <h4 className="text-xl">Loading Applicants...</h4>
              </div>
            ) : (
              <TableLayout data={applicants?.data?.data?.result} columns={columns} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
// const ApplicantsTable = ({ applicants }) => {
//   const columns = React.useMemo(() => ApplicantsColumns, []);
//   return <TableLayout data={applicants?.data?.data?.result} columns={columns} />;
// };

export default Applicants;
