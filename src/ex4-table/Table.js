import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th> Id </th>
        <th> Name </th>
        <th> Action </th>
      </tr>
    </thead>
  );
};
const TableAction = () => {
  return (
    <>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
      <button type="button" className="btn btn-warning">
        Edit
      </button>
    </>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Fiory Weldemicheal </td>
        <td>
          <TableAction />
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Tesfaldet Weldemicheal </td>
        <td>
          <TableAction />
        </td>
      </tr>

      <tr>
        <td>3</td>
        <td>Shishay Weldemicheal </td>
        <td>
          <TableAction />
        </td>
      </tr>
    </tbody>
  );
};

const Table = () => {
  return (
    <div className="Tset">
      <table className="table table-dark table-striped">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};
export default Table;
