import { SelectColumnFilter } from "../../../components/ui/TableLayout/ColumnFilter";

const SubsColumns = [
    {
      Header: "Name",
      accessor: "name", // accessor is the "key" in the data
      disableFilters: true,
      size: 20,
    },
    {
      Header: "Salary",
      accessor: "salary",
      disableFilters: true,
    },
    {
      Header: "ITR",
      accessor: "itr",
      disableFilters: true,
    },
    {
      Header: "cardUser",
      accessor: "cardUser",
      // disableFilters: true,
      Cell: ({ value }) => (value ? <div className="text-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">YES</div> : <div className="bg-red-100 text-red-800 text-xs text-center font-medium px-2.5 py-0.5 rounded-lg dark:bg-red-900 dark:text-red-300">NO</div>),
      Filter: SelectColumnFilter,
    },
    {
      Header: "Bank Name",
      accessor: "bankName",
      width:"200px",
      Filter: SelectColumnFilter,
    },
    {
      Header: "Contact",
      accessor: "contact",
      disableFilters: true,
    },
    {
      Header: "Email",
      accessor: "email",
      disableFilters: true,
    },
    {
      Header: "Pincode",
      accessor: "pincode",
      disableFilters: true,
    },
    {
      Header: "Created At",
      accessor: "createdAt",
      Cell: ({ value }) => new Date(value).toLocaleString(),
      disableFilters: true,
    },
  ];
  export default SubsColumns