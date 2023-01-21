import React, { useState } from 'react'

const ColumnFilter = ({ column }: any) => {
  const { filterValue, setFilter } = column
  return (
    <div>
      <select>
        <option>default</option>
      </select>
    </div>
  )
}

export function SelectColumnFilter(props: any) {
  const { column: { filterValue, setFilter, preFilteredRows, id } } = props
  const [menuShow, setMenuShow] = useState<Boolean>(false);
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: { values: { [x: string]: string; }; }) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  const handleMenuShow = () => setMenuShow((b) => !b);
  console.log({props})
  return (
    <div className="" onClick={(e) => e.stopPropagation()}>
      <div className="relative cursor-pointer pl-3" onClick={handleMenuShow}>
        ⋮

        {menuShow && (
          <div onClick={(e) => e.stopPropagation()}>
            <div
              className="w-full h-full bg-black/5 fixed top-0 left-0 -z-1"
              onClick={handleMenuShow}
            />
            <div className="absolute -bottom-16 z-20">
              <select
                className="block w-15 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={filterValue}
                onChange={(e) => {
                  setFilter(e.target.value || undefined);
                }}
              >
                <option value="">ALL</option>
                {options?.map((option: any, i) => (
                  <option key={i} value={option}>
                    {option?.toString()?.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default ColumnFilter