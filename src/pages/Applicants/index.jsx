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
const Applicants = () => {
  const { data } = useQuery("applicants", getAllApplicants, {
    refetchOnWindowFocus: false,
  });
  const { mutateAsync: getCSV, isLoading: isDownloading } =
    useMutation(applicantsExport);
  const handleDownload = async () => {
    const result = await getCSV();
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download",`applicants_${Date.now()}.csv`);
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
                  className=" btn credit-btn bg-danger rounded text-white"
                >
                  {isDownloading ? <>Downloading...</> : <>Download CSV</>}
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <ApplicantsTable />
          </div>
        </div>
      </div>
    </section>
  );
};
const ApplicantsTable = () => {
  const columns = React.useMemo(() => ApplicantsColumns, []);
  const { data, isLoading } = useQuery("applicants", getAllApplicants, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="container py-4  d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary mx-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <h4 className="text-xl">Loading Applicants...</h4>
      </div>
    );
  }
  return <TableLayout data={data?.data?.result} columns={columns} />;
};

export default Applicants;
