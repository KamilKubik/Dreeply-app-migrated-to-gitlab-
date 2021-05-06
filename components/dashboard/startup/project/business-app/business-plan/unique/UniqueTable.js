import React from 'react';

const UniqueTable = ({ field }) => {
  return (
    <div className="w-full grid grid-cols-12fr justify-items-center items-center mt-6">
      <div
        id={`${field.index}container`}
        className="col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background"
      >
        <table className="table-element">
          <thead>
            <tr>
              {field.headRows.map((row) => (
                <th>
                  <input className="w-full bg-primary text-background focus:outline-none" value={row} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {field.rows.map((row) => (
              <tr>
                {row.row.map((rowData) => (
                  <td>
                    <input className="w-full bg-white focus:outline-none border-l border-primarydark pl-1" value={rowData} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UniqueTable;
