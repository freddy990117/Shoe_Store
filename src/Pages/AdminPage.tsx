import React from "react";
import { useAdmin } from "../Context/AdminContext";
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["id", "Order-id", "Employed", ""];

const AdminPage = () => {
  const { orders } = useAdmin();
  console.log(orders);
  return (
    <div className="w-full overflow-hidden rounded-lg border border-surface">
      <table className="w-full">
        <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="px-2.5 py-2 text-start font-medium">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="group text-sm text-black dark:text-white">
          {orders.map(({ id, status, createdAt, total }, index) => {
            return (
              <tr key={index} className="border-b border-surface last:border-0">
                <td className="p-3">{id}</td>
                <td className="p-3">{status}</td>
                <td className="p-3">{createdAt}</td>
                <td className="p-3">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
