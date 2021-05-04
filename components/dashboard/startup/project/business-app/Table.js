import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap, { Linear } from 'gsap';
import debounce from '../../../../../utils/helpers';
import Router from 'next/router';

const TableElement = ({ currentIndex, tableUpdate, provided, field, deleteField }) => {
  console.log(field);
  const [newField, setNewField] = useState();

  useEffect(() => {
    document.getElementById(`${field.index}container`) &&
      document.getElementById(`${field.index}container`).addEventListener('mouseenter', () => {
        gsap.to(document.getElementById(`${field.index}table`), {
          height: 80,
          marginTop: 10,
          duration: 0.8,
          transformOrigin: 'top',
          ease: Linear,
        });
      });
    document.getElementById(`${field.index}container`) &&
      document.getElementById(`${field.index}container`).addEventListener('mouseleave', () => {
        gsap.to(document.getElementById(`${field.index}table`), {
          height: 0,
          marginTop: 0,
          duration: 0.8,
          transformOrigin: 'top',
          ease: Linear,
        });
      });
  }, []);

  useEffect(() => {
    setNewField(field);
  }, []);

  const onRowDataChange = (data, rowIndex, rowDataIndex) => {
    const newArray = [...newField.rows];
    newArray[rowIndex].row[rowDataIndex] = data;
    const updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // Firebase update
    databaseUpdate(updatedField);
  };

  const databaseUpdate = useCallback(
    debounce(async (data) => {
      tableUpdate(data, data.currentIndex, field.tableId, field.index);
    }, 500),
    []
  );

  const onHeadRowDataChange = (data, headRowIndex) => {
    console.log(data);
    const newArray = [...newField.headRows];
    newArray[headRowIndex] = data;
    const updatedField = {
      headRows: newArray,
      rows: field.rows,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // Firebase update
    databaseUpdate(updatedField);
  };

  const onNewRowAdd = () => {
    const newArray = [...newField.rows];
    console.log(newArray);
    const rowArray = [];
    newField.headRows.map((headRow) => rowArray.push(''));
    newArray.push({
      row: rowArray,
    });
    const updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // If empty, won't be updated to firebase
    databaseUpdate(updatedField);
  };

  const onNewRowAboveAdd = () => {
    const newArray = [...newField.rows];
    const rowArray = [];
    newField.headRows.map((headRow) => rowArray.push(''));
    newArray.unshift({
      row: rowArray,
    });
    const updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // If empty, won't be updated to firebase
    databaseUpdate(updatedField);
  };

  const onNewColumnAdd = () => {
    const newArrayRows = [...newField.rows];
    newArrayRows.map((row) => {
      console.log(row);
      row.row.push('');
    });
    const newArrayHeadRows = [...newField.headRows];
    newArrayHeadRows.push('');
    const updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // Firebase update
    databaseUpdate(updatedField);
  };

  const onNewColumnLeftAdd = () => {
    const newArrayRows = [...newField.rows];
    newArrayRows.map((row) => {
      row.row.unshift('');
    });
    const newArrayHeadRows = [...newField.headRows];
    newArrayHeadRows.unshift('');
    const updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // Firebase update
    databaseUpdate(updatedField);
  };

  const onRowDelete = () => {
    const newArray = [...newField.rows];
    newArray.pop();
    const updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // If empty, won't be updated to firebase
    databaseUpdate(updatedField);
  };

  const onRowAboveDelete = () => {
    const newArray = [...newField.rows];
    newArray.shift();
    const updatedField = {
      headRows: field.headRows,
      rows: newArray,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // If empty, won't be updated to firebase
    databaseUpdate(updatedField);
  };

  const onColumnDelete = () => {
    const newArrayRows = [...newField.rows];
    newArrayRows.map((row) => {
      row.row.pop();
    });
    const newArrayHeadRows = [...newField.headRows];
    newArrayHeadRows.pop();
    const updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // Firebase update
    databaseUpdate(updatedField);
  };

  const onColumnLeftDelete = () => {
    const newArrayRows = [...newField.rows];
    newArrayRows.map((row) => {
      row.row.shift();
    });
    const newArrayHeadRows = [...newField.headRows];
    newArrayHeadRows.shift();
    const updatedField = {
      headRows: newArrayHeadRows,
      rows: newArrayRows,
      index: field.index,
      tableId: field.tableId,
      type: 'table',
      currentIndex,
    };
    setNewField(updatedField);
    // Firebase update
    databaseUpdate(updatedField);
  };

  return (
    <div ref={provided.innerRef} {...provided.draggableProps} className="w-full grid grid-cols-12fr justify-items-center items-center mt-6">
      <div
        id={`${field.index}container`}
        className="col-start-2 col-end-12 relative flex flex-col h-full w-full flex px-8 py-8 rounded-2xl bg-white dark:bg-background"
      >
        <table className="table-element">
          <thead>
            <tr>
              {newField &&
                newField.headRows.map((row, headRowIndex) => (
                  <th>
                    <input
                      className="w-full bg-primary text-background focus:outline-none"
                      value={row}
                      onChange={(e) => onHeadRowDataChange(e.target.value, headRowIndex)}
                    />
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {newField &&
              newField.rows.map((row, rowIndex) => (
                <tr>
                  {row.row.map((rowData, rowDataIndex) => (
                    <td>
                      <input
                        className="w-full bg-white focus:outline-none border-l border-primarydark pl-1"
                        value={rowData}
                        onChange={(e) => onRowDataChange(e.target.value, rowIndex, rowDataIndex)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {/* <div id={`${field.index}table`} className='w-full overflow-auto h-0'></div> */}
        <div id={`${field.index}table`} className="w-full overflow-hidden h-0 flex justify-between items-center gap-4">
          <div className="grid grid-flow-row grid-rows-2fr h-full">
            <div className="flex">
              <img onClick={onNewRowAdd} className="cursor-pointer" src={`/table/row-add.svg`} height={22} width={22} />
              <img onClick={onRowDelete} className="cursor-pointer ml-2" src={`/table/remove1.svg`} height={26} width={26} />
            </div>
            <div className="flex">
              <img onClick={onNewRowAboveAdd} className="cursor-pointer" src={`/table/row-add-above.svg`} height={22} width={22} />
              <img onClick={onRowAboveDelete} className="cursor-pointer ml-2" src={`/table/remove1.svg`} height={26} width={26} />
            </div>
          </div>
          <div className="grid grid-flow-row grid-rows-2fr h-full">
            <div className="flex">
              <img onClick={onNewColumnAdd} className="cursor-pointer mr-2" src={`/table/column-add.svg`} height={22} width={22} />
              <img onClick={onColumnDelete} className="cursor-pointer" src={`/table/remove1.svg`} height={26} width={26} />
            </div>
            <div className="flex">
              <img onClick={onNewColumnLeftAdd} className="cursor-pointer mr-2" src={`/table/column-add-left.svg`} height={22} width={22} />
              <img onClick={onColumnLeftDelete} className="cursor-pointer" src={`/table/remove1.svg`} height={26} width={26} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-12 col-end-13 justify-self-center self-start flex flex-col flex-wrap gap-2">
        <Image onClick={() => deleteField(field.index)} className="cursor-pointer" src={`/plan-bar/exit4.svg`} height={36} width={36} />
        <Image {...provided.dragHandleProps} className="cursor-pointer mt-2" src={`/plan-bar/drag2.svg`} height={36} width={36} />
      </div>
    </div>
  );
};

export default TableElement;
