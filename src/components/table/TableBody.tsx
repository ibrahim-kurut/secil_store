"use client";

import { useState, useCallback } from "react";
import { data as initialData } from "../../../data/collections";
import swal from "sweetalert";

interface ProductConditions {
  colors?: string[];
  sizes?: string[];
  labels?: string[];
}

interface Product {
  id: number;
  title: string;
  productConditions: {
    colors?: string[];
    sizes?: string[];
    labels?: string[];
  };
  salesChannel: string;
}

interface TableBodyProps {
  setUpdateItemModel: (value: boolean) => void;
  setSelectedItem: (item: Product | null) => void;
}

const formatProductConditions = (conditions: ProductConditions): string => {
  const parts = [];

  if (conditions.colors?.length) {
    parts.push(`Renkler: ${conditions.colors.join(" _ ")}`);
  }
  if (conditions.sizes?.length) {
    parts.push(`Bedenler: ${conditions.sizes.join(" _ ")}`);
  }
  if (conditions.labels?.length) {
    parts.push(`Etiketler: ${conditions.labels.join(" _ ")}`);
  }

  return parts.join("; ");
};

const TableBody: React.FC<TableBodyProps> = ({
  setUpdateItemModel,
  setSelectedItem,
}) => {
  const [data, setData] = useState(initialData);

  // Handle update item
  const handleUpdateItem = (item: Product) => {
    setSelectedItem(item);
    setUpdateItemModel(true);
  };

  // Handle delete item
  const handleDelete = useCallback(
    (id: number) => {
      swal({
        title: `Are you sure?`,
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: ["Cancel", "Ok"],
        dangerMode: true,
      }).then((isOk) => {
        if (isOk) {
          const updatedData = data.filter((item) => item.id !== id);
          setData(updatedData);
          swal("The product has been deleted!", {
            icon: "success",
          });
        } else {
          swal("The product has not been deleted!");
        }
      });
    },
    [data]
  );

  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
            {item.title}
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-gray-700">
            {formatProductConditions(item.productConditions)}
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-gray-700">
            {item.salesChannel}
          </td>
          <td className="px-4 py-2 whitespace-nowrap text-gray-700">
            <div className="flex gap-2">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 rounded"
                aria-label="Edit Product"
                onClick={() => handleUpdateItem(item)}
              >
                edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded cursor-pointer"
                aria-label="Delete Product"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
