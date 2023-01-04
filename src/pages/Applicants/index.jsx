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
    Cell:({value})=>{
      return value?"YES":"NO";
    } 
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
  const { data } = useQuery("applicants", () => getAllApplicants(bankId), {
    refetchOnWindowFocus: false,
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
                  className="btn md:px-5 bg-danger rounded text-white"
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
  const { data, isLoading } = useQuery(
    "applicants",
    () => getAllApplicants(bankId),
    {
      refetchOnWindowFocus: false,
    }
  );

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
  return <TableLayout 
  // data={data?.data?.result}
  data={[
    {
        "id": 1,
        "bankId": 1,
        "name": "anurag",
        "contact": "9625891968",
        "email": "anuragwebpoint@gmail.com",
        "pincode": "121005",
        "cardUser": 0,
        "salary": "12023.00",
        "ITR": null,
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 2,
        "bankId": 1,
        "name": "T mohan ",
        "contact": "7306999422",
        "email": "rohithmohan79225@gmail.com",
        "pincode": "517325",
        "cardUser": 0,
        "salary": "35000.00",
        "ITR": null,
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 3,
        "bankId": 1,
        "name": "T mohan ",
        "contact": "7306999422",
        "email": "rohithmohan79225@gmail.com",
        "pincode": "517325",
        "cardUser": 0,
        "salary": "35000.00",
        "ITR": null,
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 4,
        "bankId": 1,
        "name": "T mohan ",
        "contact": "7306999422",
        "email": "rohithmohan79225@gmail.com",
        "pincode": "517325",
        "cardUser": 1,
        "salary": "35000.00",
        "ITR": null,
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 5,
        "bankId": 1,
        "name": "Rammilan ",
        "contact": "8810626383",
        "email": "ramrammilanrajpoot@gmail.com",
        "pincode": "285001",
        "cardUser": 0,
        "salary": null,
        "ITR": "400000.00",
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 6,
        "bankId": 1,
        "name": "Rammilan ",
        "contact": "8810626383",
        "email": "ramrammilanrajpoot@gmail.com",
        "pincode": "201301",
        "cardUser": 0,
        "salary": null,
        "ITR": "400000.00",
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 7,
        "bankId": 1,
        "name": "BHARAT SUNDESHA ",
        "contact": "9530066956",
        "email": "bharatsundesha2208@gmail.com",
        "pincode": "344022",
        "cardUser": 1,
        "salary": null,
        "ITR": "350000.00",
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    },
    {
        "id": 8,
        "bankId": 1,
        "name": "BHARAT SUNDESHA ",
        "contact": "9530066956",
        "email": "bharatsundesha2208@gmail.com",
        "pincode": "344022",
        "cardUser": 1,
        "salary": null,
        "ITR": "350000.00",
        "createdAt": "2023-01-01T13:39:57.000Z",
        "bankName": "Hdfc Bank"
    }]}
   columns={columns} />;
};

export default Applicants;
