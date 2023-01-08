import React from "react";
import TableLayout from "../../../components/ui/TableLayout";
import { useGetSubscribersQuery } from "./applierApi";
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

  if (isLoading) {
    return <div>Loading Appliers...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold pb-4">Subscribers table</h2>
      <TableLayout data={data.result} columns={SubsColumns} />
    </div>
  );
};

export default SubscribersTable;
