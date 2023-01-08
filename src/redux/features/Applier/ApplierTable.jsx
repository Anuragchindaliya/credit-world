import React from "react";
import TableLayout from "../../../components/ui/TableLayout";
import { useAppliersQuery } from "./applierApi";

const ApplierTable = () => {
  const { data, error, isLoading } = useAppliersQuery();
  console.log({ data });
  if (isLoading) {
    return <div>Loading Appliers...</div>;
  }
  return (
    <div>
      <h2>Applier table</h2>
      <TableLayout />
    </div>
  );
};

export default ApplierTable;
